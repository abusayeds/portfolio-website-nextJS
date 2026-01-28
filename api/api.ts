import { BASE_URL } from "../baseURL";
export const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.log(err);

    }
};