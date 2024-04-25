import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Myprofile = () => {
  
       const [userId,setUserId]= useState(sessionStorage.getItem("id"))
       const [myData,setMyData]= useState([]);

       useEffect(()=>{
        axios.get("http://localhost:3008/api/viewmypro/"+userId)
        .then((res)=>{
          console.log(res.data)
          setMyData(res.data)
        
       })
       .catch((err)=>{
        console.log(err)
       })    
      },[])
      return(
       <div style={{margin:"10%"}}>
       <Grid container spacing ={2}>
        {myData.map((val,i)=>{

          return(
            <Grid item xs={12} sm={4} md={4} >
              <Card sx={{ maxWidth: 345 }}>
              
              <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                  name:{val.name}
                </Typography>
                <Typography x={{fontsize:14}}>
                  Email:{val.email}
                </Typography>
                <Typography sx={{mb:1.5}} color="text.secondary">
                  address:{val.address}
                </Typography>
                <Typography variant='body2'>
                  username:{val.name}
                  </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">edit</Button>
                <Button size="small">update</Button>
              </CardActions>
            </Card>
            </Grid>

           
          )
        })}
        

       </Grid>
        
     
    </div>
  )
}

export default Myprofile
