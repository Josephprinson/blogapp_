import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const[inputs,setInputs]=useState({});
    const Navigate = useNavigate();
    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const submitHandler=()=>{
        console.log("btn clicked",inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res);
            console.log(res.data.person)
            alert(res.data.message)
            if(res.data.message=="logged in successfully"){
            const userId = res.data.person._id
            sessionStorage.setItem("id",userId)
            Navigate('/view')
            }
          
        })
    }
    return (
    <div style={{margin:'12%'}}>
        <Typography variant='h3' style={{color:'purple'}}>
            login form
        </Typography>
        <br></br>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                variant='outlined'
                label='username'
                onChange={inputHandler}
                name='username'
                />
            </Grid>
        </Grid>
        <br></br>
        <Grid item xs={12} sm={12} md={12}>
                <TextField
                variant='outlined'
                label='password'
                onChange={inputHandler}
                name='password'
                />
            </Grid>
            <br></br>
            <Grid item xs={12} sm={12} md={12}>
              <Button variant='contained'color='secondary' onClick={submitHandler}>
                log in
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12}></Grid>
                <Link to={'sign'}>new user </Link>
      
    </div>
  )
}

export default Login
