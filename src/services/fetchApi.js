import { MATHDRO_URL } from '../config/urlConstants';

export const fetchCovidData = async () => {
    try {
        const response = await fetch(MATHDRO_URL);
        const data = await response.json();
        const modifiedData = {
            total : [
                {titleEn: 'confirmed', titleRu: 'Инфицировано', value: data.confirmed.value, lastUpdate: data.lastUpdate},
                {titleEn: 'recovered', titleRu: 'Выздоровевших', value: data.recovered.value, lastUpdate: data.lastUpdate},
                {titleEn: 'deaths', titleRu: 'Умерших', value: data.deaths.value, lastUpdate: data.lastUpdate},
            ],
        };
        return modifiedData;
    } catch (error) {
        console.log(error);
    }

}