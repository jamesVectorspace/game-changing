"use client";

import React from "react";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import { Container } from "./globals";
import Network from "./components/Network/Network";
import GamingWeb from "./components/GamingWeb/GaminWeb";

const Home: React.FC = () => {
  return (
    <Container>
      <Infrastructure />
      <Network />
      <GamingWeb />
    </Container>
  );
};

export default Home;
