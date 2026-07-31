import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { LoadingScreen } from "./components/layout/LoadingScreen";
import { ScrollProgress } from "./components/layout/ScrollProgress";

import { FoundationShowcase } from "./pages/FoundationShowcase";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollProgress />

      <Routes>
        <Route path="/" element={<FoundationShowcase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}