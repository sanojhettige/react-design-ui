import React, { lazy, Suspense } from "react";
import { CourseCard } from "common-ui/Card";
import { Row } from "common-ui/Grid";

import { CourseContainer } from "./styles";

const COURSES = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
];

const onFallback = "Loading...";

export default function Courses() {
  return (
    <CourseContainer>
      <Suspense key="blog-page" fallback={onFallback}>
        <Row justifyContent="center">
          {COURSES.map((course) => (
            <CourseCard key={course.id} size={3} {...course} />
          ))}
        </Row>
      </Suspense>
    </CourseContainer>
  );
}
