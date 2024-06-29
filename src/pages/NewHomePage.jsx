import React from "react";
import Layout from "../components/layout/Layout.jsx";
import HomePageContent from "../components/HomePage/HomePageContent.jsx";

function NewHomePage() {
  return (
    <Layout>
      <div className="sticky top-0 z-10 py-3 text-2xl font-semibold text-center bg-white">
        Danh mục
      </div>
      <HomePageContent />
    </Layout>
  );
}

export default NewHomePage;
