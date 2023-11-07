import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import router from "@app/router"

import "@styles/global.scss";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);