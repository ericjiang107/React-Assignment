import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('HGBD: R GUNDAM AEGIS KNIGHT', '$27.95', 25.0),
  createData('HGBD: R ALUS EARTHREE GUNDAM', '$18.95', 115.0),
  createData('HGBD:R GUNDAM G-ELSE', '$22.95', 62.0),
  createData('HG DREADNOUGHT GUNDAM', '$18.95', 33.0),
  createData('HG IBO GUNDAM BAEL', '$16.95', 27.0),
];

export const DataTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Kit Name (Per Box)</TableCell>
            <TableCell align="right">Price ($)</TableCell>
            <TableCell align="right">Availability (#)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
