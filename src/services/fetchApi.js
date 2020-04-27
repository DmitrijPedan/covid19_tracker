import { MATHDRO_URL } from '../config/urlConstants';

export const fetchCovidData = async (selectedCountry) => {
    let modifiedUrl = selectedCountry && selectedCountry !== 'Global' 
        ? `${MATHDRO_URL}/countries/${selectedCountry}` 
        : MATHDRO_URL;
    try {
        const response = await fetch(modifiedUrl);
        const data = await response.json();
        const modifiedData = {
            status: response.status,
            data : [
                {titleEn: 'confirmed', titleRu: 'Инфицировано', value: data.confirmed.value, lastUpdate: data.lastUpdate},
                {titleEn: 'recovered', titleRu: 'Выздоровевших', value: data.recovered.value, lastUpdate: data.lastUpdate},
                {titleEn: 'deaths', titleRu: 'Умерших', value: data.deaths.value, lastUpdate: data.lastUpdate},
            ],
        };
        return modifiedData;
    } catch (error) {
        console.log(error);
        return null;
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
        const allCountriesResponse = await fetch(`${MATHDRO_URL}/countries`);
        const {countries} = await allCountriesResponse.json();
        const rusNamesResponse = await fetch(`https://dmitrijpedan.github.io/covid19_tracker/countries.json`);
        const {countryList: {country}} = await rusNamesResponse.json();
        const modifiedData = countries.map(elem => {
            let result = country.find(el => elem.iso3 === el.alpha3);
            return result ? {...elem, nameRus:result.name} : elem;
        })   
        return modifiedData.sort((a, b) => (a.nameRus > b.nameRus) ? 1 : (a.nameRus < b.nameRus) ? -1 : 0);;
    } catch (error) {
        console.log(error);
    }
};