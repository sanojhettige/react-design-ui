import React, { lazy, Suspense } from "react";
import FilterPanel from "components/Results/Filter";
import Courses from "components/Results/Courses";
import Header from "components/Header";
import Footer from "components/Footer";
import CounterCard from "common-ui/Card/Counter";

import { ResultContainer } from "./styles";

const onFallback = "Loading...";

export default function Results() {
  return (
    <ResultContainer>
      <Suspense key="results-page" fallback={onFallback}>
        <Header />
        <div className="results-page">
          <div className="form-container">
            <FilterPanel />
          </div>
          <div className="result-container">
            <div className="result-header">
              <div className="section-one">
                <span className="title">
                  Hemos encontrado 140 opciones para tí
                </span>
              </div>
              <div className="section-two">
                <CounterCard
                  title="Cursos Comparados"
                  count="12"
                  icon="icon-heart yellow"
                />
                <CounterCard
                  title="Cursos Favoritos"
                  count="12"
                  icon="icon-heart red"
                />
              </div>
            </div>
            <div className="course-section">
              <div className="courses">
                <Courses />
              </div>
              <div className="advertisments"></div>
            </div>
          </div>
        </div>

        <Footer />
      </Suspense>
    </ResultContainer>
  );
}
