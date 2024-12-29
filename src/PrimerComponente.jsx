import "./PrimerComponente.css";

const string = "Esto es un texto";
const number = 123456;
const array = ["Curso de React", "YouTube", 4, 100000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Curso de JavaScript", duracion: 4 };
const fecha = new Date();

export const PrimerComponente = () => {
    return (
        <>
            <h1>Vriables en JSX</h1>
            <h3>Variable tipo String</h3> <p>{string}</p>
            <h3>Variable tipo Number</h3> <p>{number}</p>
            <h3>Variable tipo Array</h3> <p>{array}</p>
            <h3>Variable tipo Boolean</h3> <p>{boolean}</p>
            <h3>Variable tipo Funcion</h3> <p>{funcion()}</p>
            <h3>Variable tipo Objeto</h3> <p>{JSON.stringify(objeto)}</p>
            <h3>Variable tipo Fecha</h3> <p>{JSON.stringify(fecha)}</p>
        </>
    );
};
