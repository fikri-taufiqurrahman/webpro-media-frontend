import React from "react";
import HelmetProvider from "@/components/layouts/helmet-provider";

const Home = () => {
  return (
    <div>
      {/* Helmet */}
      <HelmetProvider title="WebPro Media" />

      <h1>Home</h1>
    </div>
  );
};

export default Home;
