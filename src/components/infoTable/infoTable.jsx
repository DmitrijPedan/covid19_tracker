import React, {useState, useEffect} from 'react';
import Loader from '../Loader/Loader';
import {columns, createRows, tableStyles} from '../../config/tableConfigs';
import {fetchTableData} from '../../services/fetchApi';

import {Grid, Container} from '@material-ui/core';
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

const useStyles = makeStyles(tableStyles);

const InfoTable = () => {

    const classes = useStyles();
   
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => setData(await fetchTableData()))();       
    },[]);
 
    const handleChangePage = (event, newPage) => setPage(newPage);
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const table = (
        data.length ?
        (<Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column, i) => (
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
                    {createRows(data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={'tableRow' + i}>
                        {columns.map((column, i) => {
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
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>) : null
    );

    return (
        <Container className = {styles.container}>
            <Grid container spacing = {1} justify = "center" direction = "column" alignItems = "center">
              {data ? table : (<Loader />)}
          </Grid>
        </Container>
    )
}

export default InfoTable;