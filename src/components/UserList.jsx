import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserList = ({ endPoint }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${endPoint}`
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }

        UserList.propTypes = {
            endPoint: PropTypes.string.isRequired,
        };
    };

    useEffect(() => {
        fetchData();
    }, [endPoint]);

    return (
        <>
            <ul>
                {endPoint == "users"
                    ? data.map((item) => <li key={item.id}>{item.name}</li>)
                    : data.map((item) => <li key={item.id}>{item.email}</li>)}
            </ul>
        </>
    );
};
