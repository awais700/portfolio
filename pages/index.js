import AboutTwo from "@/components/about-two";
import CallToActionOne from "@/components/call-to-action-one";
import FeatureTabOne from "@/components/feature-tab-1";
import Footer from "@/components/footer";
import FunfactOne from "@/components/funfact-one";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import ParallaxOne from "@/components/parallax-1";
import ServiceTwo from "@/components/service-two";
import SliderOne from "@/components/slider-one";
import SubscribeForm from "@/components/subscribe-form";
import TrustedClient from "@/components/trusted-client";
import VideoTwo from "@/components/video-two";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />
          <FunfactOne />
          <TrustedClient />
          <FeatureTabOne />
          <ParallaxOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
