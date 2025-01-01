import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
    const [inputValue, setImputValue] = useState("");
    const onInputChange = (event) => {
        setImputValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        agregarTarea(inputValue);
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={onInputChange} // onChange={(event) => onInputChange(event)} = usar mcuando hay más de un argumento
            />
        </form>
    );
};
