import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
    const [inputValue, setImputValue] = useState("");
    const onInputChange = (event) => {
        setImputValue(event.target.value);
    };
    const onSubmit = (event) => {
        const envio = {
            nombre: inputValue,
            visto: false,
        };
        event.preventDefault();
        agregarTarea((tareas) => [...tareas, envio]);
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={onInputChange} // onChange={(event) => onInputChange(event)} usar mcuando hay más de mun argumento
            />
        </form>
    );
};
