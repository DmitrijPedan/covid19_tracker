import {MATHDRO_URL, RUS_COUNTRIES_URL, RESTCOUNTRIES_URL} from '../config/urlConstants';

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

        const rusNamesResponse = await fetch(RUS_COUNTRIES_URL);
        const {countryList: {country}} = await rusNamesResponse.json();

        const restCountryResponse = await fetch(RESTCOUNTRIES_URL);
        const restCountries = await restCountryResponse.json();

        const dataWithRusName = countries.map(elem => {
            let result = country.find(el => elem.iso3 === el.alpha3);
            return result ? {...elem, nameRus:result.name} : elem;
        })   

        const fullData = dataWithRusName.map(elem => {
            let result = restCountries.find(el => elem.iso3 === el.alpha3Code);
            return result ? {...elem, population: result.population, flag: result.flag} : null;
        })  

        let result = fullData.filter(el => el && el.name !== 'Gambia');

            return result.sort((a, b) => (a.nameRus > b.nameRus) ? 1 : (a.nameRus < b.nameRus) ? -1 : 0);

    } catch (error) {
        console.log(error);
    }
};

const fetchAllCountries = (arr) => Promise.all(arr.map(async (el) => {
    const response = await fetch(`${MATHDRO_URL}/countries/${el.name}`);
    const result = await response.json();
    return {
        ...el, 
        confirmed: result.confirmed.value,
        recovered: result.recovered.value,
        deaths: result.deaths.value,
    };
}));

export const fetchTableData = async () => {
    try {
        const countries = await fetchCountriesData();
        return await fetchAllCountries(countries);
    } catch (error) {
        console.log(error);
    }
};

//alpha3Code, flag, population