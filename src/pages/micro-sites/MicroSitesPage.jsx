import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MicroSitesList from '../../components/micro-sites/MicroSitesList';
import CreateMicroSite from '../../components/micro-sites/CreateMicroSite';
import MicroSiteDetail from '../../components/micro-sites/MicroSiteDetail';

const MicroSitesPage = () => {
  return (
    <Routes>
      <Route index element={<MicroSitesList />} />
      <Route path="create" element={<CreateMicroSite />} />
      <Route path=":id" element={<MicroSiteDetail />} />
    </Routes>
  );
};

export default MicroSitesPage;