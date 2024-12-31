import { useState } from "react";
import PropTypes from "prop-types";

export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value);

    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <>
            <h1>Contador: </h1>
            <p>{contador}</p>
            <button onClick={handleClick}>Soy un botón</button>
        </>
    );
};

ContadorApp.propTypes = {
    value: PropTypes.number.isRequired,
};
