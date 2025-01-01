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
        { id: 0, nombre: "Instalaciones necesarias", visto: true },
        { id: 1, nombre: "Uso de Vite", visto: true },
        { id: 2, nombre: "Componentes", visto: true },
        { id: 3, nombre: "Variables en JSX", visto: true },
        { id: 4, nombre: "Props", visto: true },
        { id: 5, nombre: "Eventos", visto: true },
        { id: 6, nombre: "useState", visto: true },
        { id: 7, nombre: "Redux", visto: false },
        { id: 8, nombre: "CustomHooks", visto: false },
    ];
    const [arreglo, setArreglo] = useState(listadoSecciones);

    const onAgregarTarea = (val) => {
        let valor = val.trim(); // elimina espacios vacios
        if (valor < 1) return; // evita enviar input vacío
        const envio = {
            id: arreglo.length, //cuando inicia con 1, debe usar length + 1
            nombre: valor,
            visto: false,
        };
        setArreglo([...arreglo, envio]);
    };
    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
                {arreglo.map((item) => (
                    <Items
                        key={item.id}
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
