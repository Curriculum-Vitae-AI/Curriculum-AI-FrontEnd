import axios from "axios";

export const listVacancy = async (request) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}vacancy/find`, request, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.data.response;
}