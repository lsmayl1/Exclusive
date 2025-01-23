import { createRoot } from "react-dom/client";

import Routing from "./Routing.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </>
);
