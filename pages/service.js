import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          <ServiceOne />
          <ServiceTwo />
          {/* <ServiceThree /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
