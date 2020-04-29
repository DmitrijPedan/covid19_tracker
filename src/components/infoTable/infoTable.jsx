import React, {useState, useEffect} from 'react';
import {fetchTableData} from '../../services/fetchApi';
import {Grid, Container, Button, Typography} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from './infoTable.module.scss';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

  const myColumns = [
    {id: 'nameRus', label: 'Имя', minWidth: 170 },
    {id: 'iso3', label: 'Код', minWidth: 100 },
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
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'recovered', 
      label: 'Выздоровевших',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'deaths', 
      label: 'Умерших',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
    {
      id: 'deathsPersent', 
      label: 'Смертность',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString(),
    },
  ];
  
const rows = [
    {
      flag: "https://restcountries.eu/data/aus.svg",
      iso2: "AU",
      iso3: "AUS",
      name: "Australia",
      nameRus: "Австралия",
      population: 24117360,
      confirmed: 6745, 
      recovered: 5670,
      deaths: 89
    },
    {
      flag: "https://restcountries.eu/data/aus.svg",
      iso2: "UA",
      iso3: "UA",
      name: "Ukraine",
      nameRus: "Украина",
      population: 245117360,
      confirmed: 9450, 
      recovered: 4670,
      deaths: 120
    }
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });


const InfoTable = () => {

    const classes = useStyles();
  
    const [displayTable, setDisplayTable] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //       setData(await fetchTableData())
    //     })();
    // }, []);
    
    console.log(data);
    

    const handleDisplayTable = () => setDisplayTable(!displayTable);

    const handleChangePage = (event, newPage) => setPage(newPage);
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    const table = (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>


            <Table stickyHeader aria-label="sticky table">
            
            <TableHead>
                <TableRow>
                {myColumns.map((column, i) => (
                    <TableCell
                    key={'tableCell' + i}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
           
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={'tableRow' + i}>
                    {myColumns.map((column, i) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={i} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>

            </Table>


        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    );

    return (
        <Container className = {styles.container}>
            <Grid container spacing = {1} justify = "center" direction = "column" alignItems = "center">
                <Typography variant = "subtitle1" className = "subtitle" color = "textSecondary">
                    Ниже можно посмотреть подробную информацию по странам мира в виде таблицы
                </Typography> 
                <Button variant="contained" onClick = {handleDisplayTable} className = {styles.button}>
                    {!displayTable ? 'Показать таблицу' : 'Скрыть таблицу'}
                </Button>
                {displayTable && table}
            </Grid>
        </Container>
    )
}

export default InfoTable;