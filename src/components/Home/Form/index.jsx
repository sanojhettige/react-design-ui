import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "common-ui/Grid";

import Button from "common-ui/Button";

import Select from "common-ui/Select";

import { SearchFrom } from "./styles";

const COUNTRIES = [
  {
    name: "Afghanistan",
    id: "Afghanistan",
  },
  {
    name: "Albania",
    id: "Albania",
  },
  {
    name: "Algeria",
    id: "Algeria",
  },
  {
    name: "Andorra",
    id: "Andorra",
  },
];

const COURSE_TYPES = [
  {
    name: "Licenciatura",
    id: "Licenciatura",
  },
];

const SUBJECTS = [
  {
    name: "Computer Science",
    id: "Computer Science",
  },
];

export default function Form() {
  const onChange = () => {};

  return (
    <SearchFrom>
      <Row justifyContent="center" className="search-main">
        <Col className="col">
          <Select
            label="Destino"
            options={COUNTRIES}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col">
          <Select
            label="Tipo de curso"
            options={COURSE_TYPES}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col">
          <Select
            label="Tipo de curso"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col">
          <Button type="primary" onClick={() => {}}>
            Buscar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="info-title">
          ¿Todavía no estás seguro qué quieres estudiar?{" "}
          <Link to="/">Revisa tus opciones</Link>
        </Col>
      </Row>
    </SearchFrom>
  );
}
