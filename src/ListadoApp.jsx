import PropTypes from "prop-types";
import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
    return (
        <li className="rojito">
            {nombre}
            {visto ? "✅" : "⛔"} {/* {visto && "✅"} */}
        </li>
    );
};

export const ListadoApp = () => {
    let listadoSecciones = [
        { nombre: "Instalaciones necesarias", visto: true },
        { nombre: "Uso de Vite", visto: true },
        { nombre: "Componentes", visto: true },
        { nombre: "Variables en JSX", visto: true },
        { nombre: "Props", visto: true },
        { nombre: "Eventos", visto: true },
        { nombre: "useState", visto: true },
        { nombre: "Redux", visto: false },
        { nombre: "CustomHooks", visto: false },
    ];
    const [arreglo, setArreglo] = useState(listadoSecciones);
    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
            <ol>
                {arreglo.map((item) => (
                    <Items
                        key={item.nombre}
                        nombre={item.nombre}
                        visto={item.visto}
                    ></Items>
                ))}
            </ol>
        </>
    );
};

Items.propTypes = {
    nombre: PropTypes.string.isRequired,
    visto: PropTypes.bool.isRequired,
};
