export const createRows = (arr) => {
    return arr.map(el => ({...el, deathsPersent: (el.deaths / el.population *100)})
    )
};

export const tableStyles = {
    root: {
      width: '100%',
    },
    container: {
      height: '100%',
    },
}

export const columns = [
    {
      id: 'nameRus', 
      label: 'Страна', 
      minWidth: 120 
    },
    {
      id: 'iso3', 
      label: 'Код', 
      minWidth: 100 
    },
    {
      id: 'population', 
      label: 'Население',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'confirmed', 
      label: 'Подтверждено',
      minWidth: 120,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'recovered', 
      label: 'Выздоровевших',
      minWidth: 120,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'deaths', 
      label: 'Умерших',
      minWidth: 120,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'deathsPersent', 
      label: 'Смертность',
      minWidth: 120,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
  ];

  