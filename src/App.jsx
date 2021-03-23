import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";

import theme from "common-ui/Theme";
import ErrorBoundary from "components/ErrorBoundary";
import Home from "containers/Home";
import Resultados from "containers/Results";
import SearchResult from "containers/SearchResult";
import Prices from "containers/Prices";
import TableResult from "containers/SearchResult/TableResult";

import "./app.css";
import "./icons/icons.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

const StyleReset = lazy(() =>
  import(/* webpackChunkName: "StyleReset" */ "common-ui/StyleReset")
);

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Styles..</div>}>
          <StyleReset />
        </Suspense>
        <ThemeProvider theme={theme}>
          <Route exact={true} path="/" component={TableResult} />
          <Route exact={true} path="/results" component={Resultados} />
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
