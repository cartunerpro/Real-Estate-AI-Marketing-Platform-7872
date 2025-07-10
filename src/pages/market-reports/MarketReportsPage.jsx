import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MarketReportsList from '../../components/market-reports/MarketReportsList';
import CreateMarketReport from '../../components/market-reports/CreateMarketReport';
import MarketReportDetail from '../../components/market-reports/MarketReportDetail';

const MarketReportsPage = () => {
  return (
    <Routes>
      <Route index element={<MarketReportsList />} />
      <Route path="create" element={<CreateMarketReport />} />
      <Route path=":id" element={<MarketReportDetail />} />
    </Routes>
  );
};

export default MarketReportsPage;