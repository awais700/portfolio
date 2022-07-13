import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          <ServiceOne />
          <ServiceTwo />
          <ServiceThree />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
