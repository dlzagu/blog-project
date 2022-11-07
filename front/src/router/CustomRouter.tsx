import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingCycle from "../components/loading/LoadingCycle";
import Header from "../components/commonLayout/Header";

const MainComponentPage = React.lazy(() => import("../components/pages/Main"));
const AuthComponentPage = React.lazy(() => import("../components/pages/Auth"));
const ActiveComponentPage = React.lazy(
  () => import("../components/pages/Active")
);

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<LoadingCycle />}>
        <Routes>
          <Route path="/" element={<MainComponentPage />} />
          <Route path="/login" element={<AuthComponentPage />} />
          <Route path="/activ/:slug" element={<ActiveComponentPage />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default CustomRouter;
