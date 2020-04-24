import { MATHDRO_URL } from '../config/urlConstants';

export const fetchCovidData = async () => {
    try {
        const response = await fetch(MATHDRO_URL);
        const data = await response.json();
        const modifiedData = {
            fullData: data,
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
    }

}