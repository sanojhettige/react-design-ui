import React, { lazy, Suspense } from "react";
import { UniversityCard } from "common-ui/Card";
import { Row } from "common-ui/Grid";

import TitleBar from "common-ui/TitleBar";

import { UniversityContainer } from "./styles";

const UNIVERSITIES = [
  {
    id: 1,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 2,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 3,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 4,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 5,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 6,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 7,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
  {
    id: 8,
    name: "Universidad Católica de Murcia",
    programCount: 2,
    country: 1,
    cover: "https://picsum.photos/600/500/?random",
    logo: "/images/uni-logo.png",
  },
];

const onFallback = "Loading...";

export default function Universities() {
  return (
    <UniversityContainer>
      <Suspense key="blog-page" fallback={onFallback}>
        <TitleBar
          title="Universidades más populares"
          subtitle="No viajes preocupado, nosotros estamos aquí para ayudarte y asesorarte con el seguro que más se adapta al tipo de viaje que vas a realizar. Porque la vida es muy corta para no disfrutarla"
        />
        <Row justifyContent="center">
          {UNIVERSITIES.map((university) => (
            <UniversityCard key={university.id} size={3} {...university} />
          ))}
        </Row>
      </Suspense>
    </UniversityContainer>
  );
}
