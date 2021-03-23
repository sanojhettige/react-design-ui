import React, { lazy, Suspense, useState } from "react";
import PropTypes from 'prop-types';
import Header from "components/Header";
import Footer from "components/Footer";
import Courses from "components/Results/Courses";

import { SearchResultContainer } from "./styles";

const onFallback = "Loading...";

export default function SearchResult({isActive, onClose}) {
  return (
    <SearchResultContainer>
      <Suspense key="search-result-page" fallback={onFallback}>
        <Header />
        <div className="results-page">
          <div className="result-container">
          <div className={`slideout ${isActive ? "on" : ""}`}>
        <i onClick={onClose} className="icon-close color-be-int" />
        <div className="filter-main">
          <div className="header">
            <i className="icon-filter icon" />
            <div className="title">
            Selecciona los cursos que quieres <span className="color-be-int">comparar</span>
            </div>
            <div className="sub-title">
            Tienes 8 cursos guardados. Puedes elegir hasta 4 opciones a comparar
            </div>
          </div>
          <div className="body">
                <Courses />
          </div>
        </div>
      </div>
          </div>
        </div>

        <Footer />
      </Suspense>
    </SearchResultContainer>
  );
}

SearchResult.propTypes = {
    isActive: PropTypes.bool,
    onClose: PropTypes.func,
};

SearchResult.defaultProps = {
    isActive: true,
    onClose: () => {},
}
