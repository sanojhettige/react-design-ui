import React, { lazy, Suspense } from "react";
import Form from "components/Home/Form";
import Blogs from "components/Home/Blogs";
import Universities from "components/Home/Universities";
import Destinations from "components/Home/Destinations";
import Header from "components/Header";
import Footer from "components/Footer";

import { HomeContainer } from "./styles";

const onFallback = "Loading...";

export default function Home() {
  return (
    <HomeContainer>
      <Suspense key="home-page" fallback={onFallback}>
        <Header />
        <div className="section-main">
          <div className="image-clouds">
            <img src="/images/image-home-2_1_dzucgx.png" alt="image1" />
          </div>
          <div className="image-activity">
            <img src="/images/image-home.png" alt="image2" />
          </div>

          <div className="container-header-comparator">
            <h5 className="title-header-comparator">
              El <span className="color-be-int">comparador</span> de
              universidades en español más avanzado
            </h5>
            <p className="subtitle-header-comparator">
              Busca el programa educativo que más se adapte a tus necesidades.{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Más de 2,000 opciones disponibles
              </span>
            </p>
        </div>
          <div className="form-container">
            <Form />
          </div>
        </div>
        <div>
          <Blogs />
        </div>
        <div>
          <Universities />
        </div>
        <div>
          <Destinations />
        </div>

        <Footer />
      </Suspense>
    </HomeContainer>
  );
}
