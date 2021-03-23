import React, { lazy, Suspense, useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Button from "common-ui/Button";
import Blogs from "components/Home/Blogs";
import TitleBar from "common-ui/TitleBar";
import { Row } from "common-ui/Grid";
import {PriceCard} from 'common-ui/Card'

import { PriceContainer } from "./styles";

const onFallback = "Loading...";
const PRICES = [
    {
        id: 1,
        name: 'BASIC',
        items: [
            'Perfil en la plataforma los primeros 12 meses. Después 500 USD al año'
        ],
        symbol: '$',
        price: '0'
    },
    {
        id: 2,
        name: 'SMART',
        items: [
            'Perfil en la plataforma',
            '1 banner publicitario por 14 días',
            '1 mailing a la BBDD al año',
            'Participación en Seminarios con estudiantes',
            'Aparición en nuestra Guía “Be”'
        ],
        symbol: '$',
        price: '995'
    },
    {
        id: 3,
        name: 'PREMIUM',
        items: [
            'Perfil en la plataforma',
            '3 banner publicitario por 14 días',
            '3 mailing a la BBDD al año',
            'Participación en Seminarios con estudiantes',
            'Aparición en nuestra Guía “Be”',
            'Carga de información'
        ],
        symbol: '$',
        price: '3,000'
    }
];

export default function Prices() {
  return (
    <PriceContainer>
      <Suspense key="price-result-page" fallback={onFallback}>
        <Header />
        <div className="section-main">
          <div className="image-activity">
            <img src="/images/image-3.png" alt="image2" />
          </div>

          <div className="container-header-comparator">
            <h5 className="title-header-comparator">
              El <span className="color-be-int">comparador</span> de
              universidades en español más avanzado
            </h5>
            <p className="subtitle-header-comparator">
            ¿Quieres que tu Institución Educativa sea parte de esta gran comunidad? Elige la opción que más se ajuste a tus necesidades
            </p>
            <Button type="primary">Ver precios</Button>
        </div>
        </div>
        <div>
          <Blogs />
        </div>
        <div>
        <TitleBar
          title="Precios"
          subtitle="Tenemos diferentes modelos de apoyo, si tenemos uno gratuito para los que lo tienen todo muy claro y no necesitan apoyo. Nuestros precios son anuales y están en USD dólars americanos"
        />
        <Row justifyContent="center">
          {PRICES.map((price) => (
            <PriceCard key={price.id} size={3} {...price} />
          ))}
        </Row>

        <Row justifyContent="center" className="bottom-button">
        <Button type="primary">Crear una cuenta</Button>
        </Row>
        </div>

        <Footer />
      </Suspense>
    </PriceContainer>
  );
}
