import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Async from 'react-async';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import GroupIcon from '@material-ui/icons/Group';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Post from './post/Post';
import { Card } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import mock from './data'
import Button from '@material-ui/core/Button';

var rows ;


const validerArticle = (event, data, idx) => {
  const data1 ={
   "verified": true,
  }

  axios.patch('https://corona-watch-esi.herokuapp.com/scrapping/tweets/'+data.id, data1)
  .then((response) => {
    console.log(response);
    var validerBtn=document.getElementsByClassName('validerBtnTwitter');
    validerBtn[idx].style.display='none';
    var validerBtn=document.getElementsByClassName('validerBtnTwitterDisabled');
    validerBtn[idx].style.display='block';
  }, (error) => {
    console.log(error);
  });
}

const supprimerPost = (event, data, idx) => {
  const data1 ={
    "deleted": true,
   }

   axios.patch('https://corona-watch-esi.herokuapp.com/scrapping/tweets/'+data.id, data1)
   .then((response) => {
     console.log(response);
     var supprimerBtn=document.getElementsByClassName('supprimerBtnTwitter');
     supprimerBtn[idx].style.display='none';
     var supprimerBtn=document.getElementsByClassName('supprimerBtnTwitterDisabled');
     supprimerBtn[idx].style.display='block';
   }, (error) => {
     console.log(error);
   });
  
}



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
  { id: 'valider', numeric: false, disablePadding: false, label: '' },
  { id: 'supprimer', numeric: false, disablePadding: false, label: '' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align= 'left'
            paddingLeft='20'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel 
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    backgroundColor:'#ffffff',
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  article:{
    display:'none',
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" style={{position:'absolute', top:'20%',left:'3.4%'}}>
          Nouveaux Articles
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: 0,
  },
  table: {
    width: '100%',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function Enhanced(props) {
  const obj=props;
 
  const data =Object.values(obj);
  console.log(data);

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.idArticle);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    console.log('index=   ',name);
    var x=document.getElementsByClassName('Twitter');
    document.getElementById('firstTwitter').style.display='none';
    for(let i=0;i<x.length; i++){x[i].style.display='none';}
    x[name].style.display='block';
    //afficher article of index=name
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const isSelected = name => selected.indexOf(name) !== -1;
  
  var emptyRows;
  rows=data;
  emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid container item lg={8} md={8} xl={8} xs={8} style={{top:'5px', zIndex:'9999', position:'fixed'}}>
          <Card style={{height:'30px', width:'30px', backgroundColor:'#4E73DF', borderRadius:'5px',boxShadow: '1px 2px 11px -1px rgba(164,164,208,0.75)',}}>
            <TwitterIcon style={{color:'#ffffff',height:'16px', width:'16px', marginTop:'7px', marginLeft:'7px' }}/>
          </Card>
          <Typography variant='h5' style={{textAlign:'left', marginLeft:'15px',}}>
            Twitter
          </Typography>
        </Grid>
        {data.map(stat => (
          
          <Grid className={'Twitter'} item lg={6} md={6} xl={6} xs={12} style={{display:'none'}}>
            <Post {...stat}/>
          </Grid>
         ))}
        <Grid id='firstTwitter' item lg={6} md={6} xl={6} xs={12}>
            
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={12}>
           <Card className={classes.root} style={{boxShadow: '0px 2px 23px -14px rgba(204,204,238,0.75)',borderRadius:'5px'}}>
             <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    />
                    <TableBody>
                    {stableSort(data, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                        const idx = index;
                        const isItemSelected = isSelected(idx);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        var date =new Date(row.timestamp).toLocaleString();
                        return (
                          
                            <TableRow
                            hover
                            onClick={event => handleClick(event, idx)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={idx}
                            selected={isItemSelected}
                            >
                          
                            <TableCell paddingLeft='20' component="th" id={labelId} scope="row" style={{width:'50%',}}>
                                {date}
                            </TableCell>

                            <TableCell align="left" style={{width:'20%'}}>
                            {!row.verified ? 
                              <Button className={'validerBtnTwitter'} variant="contained" color="primary" style={{backgroundColor:'#4E73DF',}} onClick={event => validerArticle(event, row, idx)}>
                                  Valider
                              </Button>: <Button className={'validerBtnTwitter'} variant="contained" disabled>valider</Button>}
                              <Button className={'validerBtnTwitterDisabled'} variant="contained" style={{ display:'none'}} disabled>verifier</Button>
                            </TableCell>

                            <TableCell align="left" style={{width:'20%'}}>
                            {!row.verified ? 
                              <Button className={'supprimerBtnTwitter'} variant="contained" color="secondary" onClick={event => supprimerPost(event, row, idx)}>
                                  Supprimer
                              </Button>: <Button className={'supprimerBtnTwitter'} variant="contained" disabled>Supprimer</Button>}
                              <Button className={'supprimerBtnTwitterDisabled'} variant="contained" style={{ display:'none'}} disabled>Supprimer</Button>
                            </TableCell>

                            </TableRow>
                        );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Paper>
            </Card>
        </Grid>
    </Grid>
</div>
);


}
