import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import cx from "classnames";
import * as serviceWorker from "./serviceWorker";
import Router from "./routes";
import store from "./state/store";
import "./style.scss";
const App = () => {
  return (
    <main className={cx("mainContainer")}>
      <Provider store={store}>
        <Router />
      </Provider>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.resetCache();
serviceWorker.register();
