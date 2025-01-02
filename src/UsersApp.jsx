import { useState } from "react";
import { UserList } from "./components/userList";

export const UsersApp = () => {
    const [endPoint, setendPoint] = useState("users");
    const handleFetch = () => {
        setendPoint("comments");
    };

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Llamada a la API</button>
        </>
    );
};
