import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Footer from "../../components/Footer";

import { Background, Content, PageContainer } from "./styles";

export function Home() {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    api.get("/").then((response) => {
      setInfos({
        totalStocks: response.data.totalStocks,
        totalFiis: response.data.totalFiis,
      });
    });
  }, []);

  if (!infos) {
    return <p>Loading ...</p>;
  }

  return (
    <PageContainer>
      <Content>
        <header>
          <h2>IBOV</h2>
          <p>{infos.totalStocks} companies listed</p>
        </header>

        <header>
          <h2>IFIX</h2>
          <p>{infos.totalFiis} FIIs listed</p>
        </header>

        <Footer />
      </Content>
      <Background>
        <section>
          <h1>Welcome to Fundamentações</h1>
          <h2>The website to see data of IBOV and IFIX</h2>
          <Link to="/toplist">Enter</Link>
        </section>
      </Background>
    </PageContainer>
  );
}
