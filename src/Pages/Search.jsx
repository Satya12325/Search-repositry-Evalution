import {useDispatch, useSelector} from "react-redux";
import {getDataRepositry} from "../redux/app/action"
import {useState} from "react";
import styles from './Styles.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import FullWidthGrid from '../Components/Card'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    backgroundColor: 'gray'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));






function Search(){
    
    const [dato, setDato] = useState("");
    const dispatch =  useDispatch();
    const getData =  (dato) =>{
        return fetch(`https://api.github.com/search/repositories?q=${dato}`)
        .then(res => res.json())
        .then((res) => {
            const getData = getDataRepositry(res.items);
            console.log(res);
            dispatch(getData);
        })
    
    }

    const {data} = useSelector((state) => state.app)
    const handleClick = () => {
        getData(dato)
    }

    const classes = useStyles();

  return (
    
     <>
     <div className={styles.serchComponent}>
      <InputBase
        className={classes.input}
        placeholder="Search Git hub Repositry"
        value={dato}
        onChange={(e)=>setDato(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search"  onClick={handleClick}>
        <SearchIcon />
      </IconButton>
      
     </div>
     <div className="App">
         {
             data.map((item) => {
                 return <FullWidthGrid key={item.id}
                 id={item.id}
                 repo={item.description}
                 title={item.full_name} 
                 />
                 
                

                
             })
         }
     </div>
    </>
  );
}
export default Search;