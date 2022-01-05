import {useDispatch, useSelector} from "react-redux";
import {getDataRepositry} from "../redux/app/action"
import {useState} from "react";
import styles from './Styles.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


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
    
    const [data, setData] = useState("");
    const dispatch =  useDispatch();
    const getDato =  (data) =>{
        return fetch(`https://api.github.com/search/users?q=${data}`)
        .then(res => res.json())
        .then((res) => {
            const getresult = getDataRepositry(res.items);
            dispatch(getresult);
        })
    
    }

    const {dato} = useSelector((state) => state.app)
    const handleSearch = () => {
        getDato(data)
    }

    const classes = useStyles();

  return (
    
     <>
     <div className={styles.serchComponent}>
      <InputBase
        className={classes.input}
        placeholder="Search Git hub Repositry"
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search"  onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      
     </div>
     <div>
         {
             dato.map((item) => {
                 return <div key={item.id}>{item.login}</div>;
             })
         }
     </div>
    </>
  );
}
export default Search;