import PropTypes from "prop-types";

export const PrimerComponente = ({
    titulo,
    subtitulo = "Sección de Props 2",
}) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </>
    );
};

PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
};

PrimerComponente.defaultProps = {
    titulo: "Curso de React",
};
