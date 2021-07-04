import axios from 'axios';


export const useGet = async (url, payload) => {
    const response = await axios.get(url, payload);
    return response.data;
}