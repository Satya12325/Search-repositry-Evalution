import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { loginSuccess } from "../redux/auth/action";
import {Redirect} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Inputs() {
  const classes = useStyles();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const dispatch = useDispatch();
     const Auth = useSelector((state) => state.auth.Auth)

     const handleAdd = () => {
        const action = loginSuccess(Date.now());
        dispatch(action);
       
      };
      
      if(Auth){
          return <Redirect to="/search"/>
      }



     return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Input
        type="email"
        placeholder="Email"
        inputProps={{ "aria-label": "description" }}
        value={email}
        onChange={e=> setEmail(e.target.value)}
      />
      <br/>
      <Input
        type="password"
        placeholder="Password"
        inputProps={{ "aria-label": "description" }}
        value={password}
        onChange={e=> setPassword(e.target.value)}
      />
      <br/>
     
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Login
      </Button>
     
      
    </form>
  );
}


export default Inputs;