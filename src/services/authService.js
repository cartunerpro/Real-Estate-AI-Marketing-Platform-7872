import supabase from '../lib/supabase';

export const authService = {
  async login(email, password) {
    try {
      console.log('Attempting login for:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) {
        console.error('Login error:', error);
        throw error;
      }

      console.log('Login successful, fetching profile...');
      
      // Get the user profile data
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Profile fetch error:', profileError);
        throw profileError;
      }

      let userProfile = profile;

      // If profile doesn't exist, create one
      if (!profile) {
        console.log('Creating new profile...');
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              name: data.user.email.split('@')[0],
              role: email === 'admin@example.com' ? 'admin' : 
                    email === 'agent@example.com' ? 'agent' : 'user',
              email: data.user.email
            }
          ])
          .select()
          .single();

        if (insertError) {
          console.error('Profile creation error:', insertError);
          throw insertError;
        }
        userProfile = newProfile;
      }

      return {
        user: { ...data.user, ...userProfile, role: userProfile?.role || 'user' },
        token: data.session.access_token
      };
    } catch (error) {
      console.error('Login service error:', error);
      throw new Error(error.message || 'Login failed');
    }
  },

  async register(userData) {
    try {
      console.log('Attempting registration for:', userData.email);
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            name: userData.name,
          }
        }
      });

      if (error) {
        console.error('Registration error:', error);
        throw error;
      }

      // For development, we'll assume email confirmation is disabled
      if (data.user && !data.session) {
        throw new Error('Please check your email to confirm your account');
      }

      // Create user profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              name: userData.name,
              role: 'user',
              email: userData.email
            }
          ]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
          // Don't throw error here, user is already created in auth
        }
      }

      return {
        user: { ...data.user, name: userData.name, role: 'user' },
        token: data.session?.access_token
      };
    } catch (error) {
      console.error('Registration service error:', error);
      throw new Error(error.message || 'Registration failed');
    }
  },

  // ... rest of the service methods remain the same
};