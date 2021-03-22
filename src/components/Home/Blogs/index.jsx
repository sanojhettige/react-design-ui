import React, { lazy, Suspense } from "react";
import { BlogPost } from "common-ui/Card";
import { Row } from "common-ui/Grid";

import TitleBar from "common-ui/TitleBar";

import { BlogsContainer } from "./styles";

const BLOGS = [
  {
    id: 1,
    name: "Licenciaturas",
    cover: "https://picsum.photos/600/500/?random",
    summary:
      "Nuestro equipo de experto te ayudará a realizar todos los trámites para que seas aceptado en la universidad de tus sueños. Estaremos cerca de ti en todo el proceso de aplicación a la universidad",
  },
  {
    id: 2,
    name: "Maestrias",
    cover: "https://picsum.photos/600/500/?random",
    summary:
      "Nuestro equipo de experto te ayudará a realizar todos los trámites para que seas aceptado en la universidad de tus sueños. Estaremos cerca de ti en todo el proceso de aplicación a la universidad",
  },
];

const onFallback = "Loading...";

export default function Blogs() {
  return (
    <BlogsContainer>
      <Suspense key="blog-page" fallback={onFallback}>
        <TitleBar
          title="¿Cómo aplicar a una universidad en el extranjero?"
          subtitle="Nuestro equipo de experto te ayudará a realizar todos los trámites para que seas aceptado en la universidad de tus sueños. Estaremos cerca de ti en todo el proceso de aplicación a la universidad"
        />
        <Row justifyContent="center">
          {BLOGS.map((blog) => (
            <BlogPost key={blog.id} size={6} {...blog} />
          ))}
        </Row>
      </Suspense>
    </BlogsContainer>
  );
}
