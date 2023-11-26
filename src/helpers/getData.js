import axios from "axios";
export const getData = async (url) => {
    try {
        const axiosData = await axios.get(url)
        const dataPizza = axiosData.data;
        return dataPizza;
    } catch (err) {
        console.log(err);
    }
}