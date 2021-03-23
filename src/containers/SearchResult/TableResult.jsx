import React, { lazy, Suspense, useState } from "react";
import PropTypes from 'prop-types';
import Header from "components/Header";
import Footer from "components/Footer";
import TitleBar from "common-ui/TitleBar";
import Table from "common-ui/Table/Table1";

import { TableResultContainer } from "./styles";

const onFallback = "Loading...";
const dataArr = [
    {
        id: 1,
        name: "Grado en Administración y Dirección de Empresas",
        cover: "https://picsum.photos/600/500/?random",
        logo: "/images/uni-logo-2.png",
        startDate: "Sept 2021",
        cost: "6,600 EUR",
        universityName: "Universidad Católica de Murcia",
        type: "Curso en español I Presencial ",
        period: "4 años",
        courseType: "Full time",
        courseCategory: "Licenciatura",
        data: [
          {title: 'Coste del curso', value: '6,600 EUR', highlighted: true},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Modo de estudio'},
            {title: 'Duración del programa por año', info: 'info tooltop', value: '52 semanas'},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Full time'},
            {title: 'Area de estudio', info: 'info tooltop', value: 'Administración de Empresas'},
            {title: 'Fecha de inicio', info: 'info tooltop', value: 'Sept 2021'},
            {title: 'Duración total del curso', info: 'info tooltop', value: '4 años'},
            {title: 'Nivel de educación', info: 'info tooltop', value: 'Licenciatura'},
            {title: 'Ranking QS', info: 'info tooltop', value: '701-750'},
            {title: 'Nivel de accesso IELTS', info: 'info tooltop', value: '6.0'},
            {title: 'Nivel de acceso TOEFL', info: 'info tooltop', value: '80'},
            {title: 'NIvel de acceso PTE', info: 'info tooltop', value: '54'},
            {title: 'Incluye costes de vida', info: 'info tooltop', value: true, icon: true},
            {title: 'Incluye seguro de estudiantes', info: 'info tooltop', value: false, icon: true}
        ]
      },
      {
        id: 2,
        name: "Grado en Administración y Dirección de Empresas",
        cover: "https://picsum.photos/600/500/?random",
        logo: "/images/uni-logo-2.png",
        startDate: "Sept 2021",
        cost: "6,600 EUR",
        universityName: "Universidad Católica de Murcia",
        type: "Curso en español I Presencial ",
        period: "4 años",
        courseType: "Full time",
        courseCategory: "Licenciatura",
        data: [
          {title: 'Coste del curso', value: '6,600 EUR', highlighted: true},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Modo de estudio'},
            {title: 'Duración del programa por año', info: 'info tooltop', value: '52 semanas'},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Full time'},
            {title: 'Area de estudio', info: 'info tooltop', value: 'Administración de Empresas'},
            {title: 'Fecha de inicio', info: 'info tooltop', value: 'Sept 2021'},
            {title: 'Duración total del curso', info: 'info tooltop', value: '4 años'},
            {title: 'Nivel de educación', info: 'info tooltop', value: 'Licenciatura'},
            {title: 'Ranking QS', info: 'info tooltop', value: '701-750'},
            {title: 'Nivel de accesso IELTS', info: 'info tooltop', value: '6.0'},
            {title: 'Nivel de acceso TOEFL', info: 'info tooltop', value: '80'},
            {title: 'NIvel de acceso PTE', info: 'info tooltop', value: '54'},
            {title: 'Incluye costes de vida', info: 'info tooltop', value: true, icon: true},
            {title: 'Incluye seguro de estudiantes', info: 'info tooltop', value: false, icon: true}
        ]
      },
      {
        id: 3,
        name: "Grado en Administración y Dirección de Empresas",
        cover: "https://picsum.photos/600/500/?random",
        logo: "/images/uni-logo-2.png",
        startDate: "Sept 2021",
        cost: "6,600 EUR",
        universityName: "Universidad Católica de Murcia",
        type: "Curso en español I Presencial ",
        period: "4 años",
        courseType: "Full time",
        courseCategory: "Licenciatura",
        data: [
          {title: 'Coste del curso', value: '6,600 EUR', highlighted: true},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Modo de estudio'},
            {title: 'Duración del programa por año', info: 'info tooltop', value: '52 semanas'},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Full time'},
            {title: 'Area de estudio', info: 'info tooltop', value: 'Administración de Empresas'},
            {title: 'Fecha de inicio', info: 'info tooltop', value: 'Sept 2021'},
            {title: 'Duración total del curso', info: 'info tooltop', value: '4 años'},
            {title: 'Nivel de educación', info: 'info tooltop', value: 'Licenciatura'},
            {title: 'Ranking QS', info: 'info tooltop', value: '701-750'},
            {title: 'Nivel de accesso IELTS', info: 'info tooltop', value: '6.0'},
            {title: 'Nivel de acceso TOEFL', info: 'info tooltop', value: '80'},
            {title: 'NIvel de acceso PTE', info: 'info tooltop', value: '54'},
            {title: 'Incluye costes de vida', info: 'info tooltop', value: 'heart color-be-int ', icon: true},
            {title: 'Incluye seguro de estudiantes', info: 'info tooltop', value: 'un-checked', icon: true}
        ]
      },
      {
        id: 4,
        name: "Grado en Administración y Dirección de Empresas",
        cover: "https://picsum.photos/600/500/?random",
        logo: "/images/uni-logo-2.png",
        startDate: "Sept 2021",
        cost: "6,600 EUR",
        universityName: "Universidad Católica de Murcia",
        type: "Curso en español I Presencial ",
        period: "4 años",
        courseType: "Full time",
        courseCategory: "Licenciatura",
        data: [
          {title: 'Coste del curso', value: '6,600 EUR', highlighted: true},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Modo de estudio'},
            {title: 'Duración del programa por año', info: 'info tooltop', value: '52 semanas'},
            {title: 'Modo de estudio', info: 'info tooltop', value: 'Full time'},
            {title: 'Area de estudio', info: 'info tooltop', value: 'Administración de Empresas'},
            {title: 'Fecha de inicio', info: 'info tooltop', value: 'Sept 2021'},
            {title: 'Duración total del curso', info: 'info tooltop', value: '4 años'},
            {title: 'Nivel de educación', info: 'info tooltop', value: 'Licenciatura'},
            {title: 'Ranking QS', info: 'info tooltop', value: '701-750'},
            {title: 'Nivel de accesso IELTS', info: 'info tooltop', value: '6.0'},
            {title: 'Nivel de acceso TOEFL', info: 'info tooltop', value: '80'},
            {title: 'NIvel de acceso PTE', info: 'info tooltop', value: '54'},
            {title: 'Incluye costes de vida', info: 'info tooltop', value: 'heart color-be-int ', icon: true},
            {title: 'Incluye seguro de estudiantes', info: 'info tooltop', value: 'un-checked', icon: true}
        ]
      }
];


export default function TableResult() {
  return (
    <TableResultContainer>
      <Suspense key="table-search-result-page" fallback={onFallback}>
        <Header />
        <div className="results-page">
          <div className="result-container">
          <TitleBar
          title="Nuestro comparador de programas en el extranjero"
          subtitle="Nuestro comparador de programas en el extranjero"
        />
            <Table data={dataArr} />
          </div>
        </div>

        <Footer />
      </Suspense>
    </TableResultContainer>
  );
}