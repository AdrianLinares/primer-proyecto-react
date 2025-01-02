import { useFetchData } from "../hooks/useFetchData";
import PropTypes from "prop-types";

export const UserList = ({ endPoint }) => {
    const { data, isLoading } = useFetchData(endPoint);
    return (
        <>
            <ul>
                {isLoading ? (
                    <p>Cargando</p>
                ) : endPoint == "users" ? (
                    data.map((item) => <li key={item.id}>{item.name}</li>)
                ) : (
                    data.map((item) => <li key={item.id}>{item.email}</li>)
                )}
            </ul>
        </>
    );
};

UserList.propTypes = {
    endPoint: PropTypes.string.isRequired,
};
