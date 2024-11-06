import axios from "axios";

export const getMotivationLetter = async (request) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}motivation-letter/create`, request, {
        headers: {
            'Content-Type': 'application/json'
        },
        responseType: 'blob'
    });
    return response.data;
}