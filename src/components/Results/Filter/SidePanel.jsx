import React, { useState } from "react";

import Radio from "common-ui/Radio";
import RadioGroup from "common-ui/RadioGroup";
import RangeSlider from "common-ui/RangeSlider";

import { SideFilterContainer } from "./styles";

export default function FilterPanel({ isActive, onClose }) {
  const [price, setPrice] = useState(50);

  const handlePriceRangeChange = ({ value }) => {
    setPrice(value);
  };
  return (
    <SideFilterContainer>
      <div className={`slideout ${isActive ? "on" : ""}`}>
        <i onClick={onClose} className="icon-close" />
        <div className="filter-main">
          <div className="header">
            <i className="icon-filter icon" />
            <div className="title">
              Filtros de <span className="color-be-int">búsqueda</span>
            </div>
          </div>
          <div className="body">
            <div className="field-row">
              <div className="field-title">Tipo de programa</div>
              <div className="field-content">
                <RadioGroup name="program">
                  <Radio name="Certificado" value="Certificado">
                    Certificado
                  </Radio>
                  <Radio name="Diplomado" value="Diplomado">
                    Diplomado
                  </Radio>
                  <Radio name="Licenciatura" value="Licenciatura">
                    Licenciatura
                  </Radio>
                  <Radio name="Maestría" value="Maestría">
                    Maestría
                  </Radio>
                  <Radio name="Doctorado" value="Doctorado">
                    Doctorado
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="field-row">
              <div className="field-title">Precio de colegiatura</div>
              <div className="field-content">
                <RangeSlider
                  max={100}
                  min={0}
                  value={price}
                  onChange={(value) => handlePriceRangeChange({ value })}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field-title">País</div>
              <div className="field-content">
                <RadioGroup name="country">
                  <Radio name="Canadá" value="Canadá">
                    Canadá
                  </Radio>
                  <Radio name="España" value="España">
                    España
                  </Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideFilterContainer>
  );
}
