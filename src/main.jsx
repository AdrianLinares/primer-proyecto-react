import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ListadoApp } from "./ListadoApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div>
            <ListadoApp />
        </div>
    </StrictMode>
);
