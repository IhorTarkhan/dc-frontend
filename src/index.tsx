import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Spinner } from "./spiner/Spinner";

// Added just for demo spinner,
// If you want the fastest loading as possible, uncomment nex line
// const App = React.lazy(() => import("./App")); /*
const App = React.lazy(() =>
  import("./App").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 1000);
    });
  })
);
//*/

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
