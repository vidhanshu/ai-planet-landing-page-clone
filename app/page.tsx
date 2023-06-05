"use client";

import BackedBy from "./components/home/BackedBy";
import { Box } from "@mui/material";
import ConnectToCommunity from "./components/home/ConnectToCommunity";
import FeaturedIn from "./components/home/FeaturedIn";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import OrganizationEmpowered from "./components/home/OrganizationEmpowered";
import OurImpact from "./components/home/OurImpact";
import React from "react";

function page() {
  return (
    <Box>
      <Header />
      <OurImpact />
      <OrganizationEmpowered />
      <FeaturedIn />
      {/* <Contributors /> */}
      <BackedBy />
      <ConnectToCommunity />
      <Footer />
    </Box>
  );
}

export default page;
