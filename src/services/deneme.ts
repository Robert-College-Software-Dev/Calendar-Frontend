import axios from "axios";

const url = process.env.REACT_APP_API_URL && "http://localhost:5000";

export async function getDeneme() {
    try {
        return await axios.get(url + "/deneme").then((response) => response.data)
    } catch (error) {
        return `Ups ${error}`
    }
}

