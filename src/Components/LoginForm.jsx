import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {login} from "../Redux/Reducer"
import {useState} from "react";



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
      <Button variant="contained" color="primary" >
        Login
      </Button>
    </form>
  );
}

const mapStatetoprops = (state) => {
    return {
        isPanding: state.isPanding,
        isSucess: state.isSucess,
        LoginError: state.LoginError
    };

}

const mapDispatchToprops = (dispatch) => {
    return {
        login:(email, password)=> dispatch(login(email, password))
    }
}

export default connect(mapStatetoprops, mapDispatchToprops)(Inputs)