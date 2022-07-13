import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactForm from "@/components/contact-form";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
const ContactPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact">
          <HeaderOne />
          <PageBanner title="Contact Us" name="Contact" />
          <ContactForm />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
