import { MATHDRO_URL } from '../config/urlConstants';

export const fetchCovidData = async (selectedCountry) => {
    let modifiedUrl = selectedCountry && selectedCountry != 'Global' 
        ? `${MATHDRO_URL}/countries/${selectedCountry}` 
        : MATHDRO_URL;
    try {
        const response = await fetch(modifiedUrl);
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
};

export const fetchDayData = async () => {
    try {
        const response = await fetch(`${MATHDRO_URL}/daily`);
        const data = await response.json();
        const modifiedData = data.map((el) => ({
            confirmed: el.confirmed.total,
            deaths: el.deaths.total,
            date: el.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCountriesData = async () => {
    try {
        const response = await fetch(`${MATHDRO_URL}/countries`);
        const data = await response.json();
        return data.countries;
    } catch (error) {
        console.log(error);
    }
};