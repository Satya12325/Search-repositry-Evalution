import {useDispatch, useSelector} from "react-redux";
import {getDataRepositry} from "../redux/app/action"
import {useState,useEffect} from "react";
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



const Pagination = ({ totalPages, currentPage, onClickCallback }) => {
  const pages = new Array(totalPages).fill(0).map((a, i) =>
   currentPage === i + 1  ? (
      <button disabled style={{ background: "olive" }} key={i}>
        {i + 1}
      </button>
    ) : (
      <button onClick={() => onClickCallback(i + 1)} key={i}>
        {i + 1}
      </button>
    )
  );
  return <div style={{ display: "flex", gap: "1rem" , margin: "30px"}}>{pages}</div>;
};



function Search(){
  const [isLoading, setIsLoading] = useState(true);
    const [dato, setDato] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)
    const dispatch =  useDispatch();
    const getData =  (dato) =>{
        return fetch(`https://api.github.com/search/repositories?q=${dato}&page=${page}`)
        .then(res => res.json())
        .then((res) => {
            const getData = getDataRepositry(res.items);
            console.log(res);
            dispatch(getData);
        })
    
    }

    const {data} = useSelector((state) => state.app)
    const handleClick = () => {
        getData(dato,page)
    }
    useEffect(() =>{
      handleClick(dato,page)
    },[dato,page])

    const changePage = (num) => {
      if(num <= 1){
        setPage(1);
        return;
      }
      setPage(num)
    };

    const per_page = 4;
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
           data?.filter(
             (_,i) => i >=(page-1)*per_page && i < page * per_page
           ).map((item) => {            
                 return <FullWidthGrid key={item.id}
                 id={item.id}
                 repo={item.description}
                 title={item.full_name} 
                 />
                 
                

                
             })
         }
     </div>
     <div className="App">
       <Pagination
       totalPages={Math.ceil(30/per_page)} 
       currentPage={page}
        onClickCallback={(page) =>changePage(page)}
       />
     </div>
    </>
  );
}
export default Search;