import React, { lazy, Suspense } from "react";
import { DestinationCard } from "common-ui/Card";
import { Row } from "common-ui/Grid";

import TitleBar from "common-ui/TitleBar";

import { DestinationContainer } from "./styles";

const DESTINATIONS = [
  {
    id: 1,
    name: "Reino Unido",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 2,
    name: "Alemania",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 3,
    name: "Canada",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 4,
    name: "Estados Unidos",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 5,
    name: "España",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 6,
    name: "Italia",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 7,
    name: "South Africa",
    cover: "https://picsum.photos/600/500/?random",
  },
  {
    id: 8,
    name: "Reino Unido",
    cover: "https://picsum.photos/600/500/?random",
  },
];

const onFallback = "Loading...";

export default function Destinations() {
  return (
    <DestinationContainer>
      <Suspense key="blog-page" fallback={onFallback}>
        <TitleBar
          title="Destinos más populares"
          subtitle="No importa el tipo de viaje que hagas, nosotros tenemos la cobertura que necesitas"
        />
        <Row justifyContent="center">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} size={4} {...destination} />
          ))}
        </Row>
      </Suspense>
    </DestinationContainer>
  );
}
