import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "common-ui/Grid";

import Button from "common-ui/Button";
import SideFilterPanel from "components/Results/Filter/SidePanel";

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

export default function FilterPanel() {
  const onChange = () => {};
  const [opneSidePanel, setOpneSidePanel] = useState(false);

  const toggleFilterPanel = () => setOpneSidePanel(!opneSidePanel);

  return (
    <SearchFrom>
      <Row justifyContent="center" className="filter-main">
        <Col className="col form-control">
          <Select
            label="Tipo de programa:"
            options={COUNTRIES}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="País:"
            options={COURSE_TYPES}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Área de estudio:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Fecha de Inicio:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Modalidad de estudio:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Work Permit:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Rango de precios:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col form-control">
          <Select
            label="Rango de precios:"
            options={SUBJECTS}
            onChange={(values) => onChange(values)}
          />
        </Col>
        <Col className="col filter-icons">
          <i className="icon-search" />
        </Col>
        <Col className="col filter-icons">
          <i className="icon-filter" />
        </Col>
        <Col className="col filter-btn">
          <div onClick={toggleFilterPanel}>Mas filtros</div>
        </Col>
      </Row>
      <Row>
        <SideFilterPanel isActive={opneSidePanel} onClose={toggleFilterPanel} />
      </Row>
    </SearchFrom>
  );
}
