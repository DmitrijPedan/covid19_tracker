import { MATHDRO_URL } from '../config/urlConstants';

export const fetchCovidData = async () => {
    const response = await fetch(MATHDRO_URL);
    return await response.json();
}