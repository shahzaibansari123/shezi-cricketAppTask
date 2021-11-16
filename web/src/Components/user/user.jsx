import React from "react";
import axios from 'axios';
import { baseUrl } from "./../../core";
import { useState, useEffect } from "react"
import io from 'socket.io-client';
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'
import { Container } from 'react-bootstrap';

function UserPanel() {
  // let history = useHistory();
  // let { dispatch } = useContext(GlobalContext);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/data`, {
    })
      .then(res => {
        // let arr=[];
        // // res.data.forEach((element)=>{
        //   arr.push(res.data)
        // // })
        console.log(res.data);
        console.log("shahzaib")
        // setPosts(res.data)
        setPosts(res.data)
        // console.log(arr)
      });

    return () => {
      // console.log("post shown");
    };
  }, []);

  useEffect(() => {
    const socket = io("https://shezi-cricketapptask.herokuapp.com");
    // to connect with locally running Socker.io server
    //  const socket = io("http://localhost:5000");
    socket.on('connect', function () {
      console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on('matchData', function (data) {
      console.log(data);
      // setPosts((prev) => [data, ...prev])
      setPosts(data)
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <div>
        <Container>
          <br /> <br />
          <div style={{ padding: "2rem" }} id="maindiv">
            <Grid container spacing={2} sx={{ width: "90%", margin: "auto" }}>
              <Grid item xl={6} lg={6} xs={12} sm={12} md={12}   >
                <Item ><h2 style={{ fontSize: "48px", fontStyle: "italic", fontFamily: "Times New Roman" }}>{posts.tournament}</h2></Item>
              </Grid>
              <Grid item xl={4} lg={4} xs={12} sm={12} md={12} >
                <Item><h6 style={{ fontSize: "18px", marginTop: "8%", fontFamily: "Times New Roman" }} >{posts.matchDate}</h6></Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                    <h2 style={{ fontSize: "18px", color: "darkgray", fontFamily: "Times New Roman" }}>{posts.inning} Inning</h2>
                  </center>
                </Item>
              </Grid>
              <Grid item xl={2} lg={2} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontSize: "34px", fontStyle: "italic", fontFamily: "Times New Roman" }}>{posts.teamOne}</h1><br />
                </Item>
              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontFamily: "Times New Roman" }}>{posts.teamOneScore}  </h1>
                </Item>
              </Grid>
              <Grid item xl={5} lg={5} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontFamily: "Times New Roman" }}>/ {posts.teamOneWicket}  </h1>
                </Item>
              </Grid>
              <Grid item xl={2} lg={2} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontSize: "34px", fontStyle: "italic", fontFamily: "Times New Roman" }}>{posts.teamTwo}</h1><br />
                </Item>
              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontFamily: "Times New Roman" }}>{posts.teamTwoScore}  </h1>
                </Item>
              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1 style={{ fontFamily: "Times New Roman" }}>/ {posts.teamTwoWicket}</h1>
                </Item>
              </Grid>
              <Grid item xl={2} lg={2} xs={12} sm={12} md={12} >
                <Item>
                </Item>
              </Grid>
              <Grid item xl={2} lg={2} xs={12} sm={12} md={12} >
                <Item>
                  <h5 style={{ fontFamily: "Times New Roman" }}>Overs: {posts.teamOneOvers}</h5>
                </Item>
              </Grid>
              <Grid item xl={6} lg={6} xs={12} sm={12} md={12} >
                <Item>
                </Item>
              </Grid>
              <Grid item xl={2} lg={2} xs={12} sm={12} md={12} >
                <Item>
                  <h5 style={{ fontFamily: "Times New Roman" }}>Overs: {posts.teamTwoOvers}</h5>
                </Item>
              </Grid>
              <br />
              <Grid item xl={9} lg={9} xs={12} sm={12} md={12} >
                <Item>
                  <h3 style={{ fontFamily: "Times New Roman" }}>{posts.player1}</h3>
                </Item>
              </Grid>
              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                  <br />
                  <h3 style={{ fontFamily: "Times New Roman" }}>{posts.bowler1}</h3>
                </Item>
              </Grid>
              <Grid item xl={9} lg={9} xs={12} sm={12} md={12} >
                <Item>
                  <h3 style={{ fontFamily: "Times New Roman" }}>{posts.player2}</h3>
                </Item>
              </Grid>
              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                  <h3 style={{ fontFamily: "Times New Roman" }}>{posts.bowler2}</h3>
                </Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                    <h2 style={{ fontSize: "24px", fontFamily: "Times New Roman" }}>Target: {posts.target}</h2>
                  </center>
                </Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                    <h2 style={{ fontSize: "18px", fontFamily: "Times New Roman" }}>{posts.toss}</h2>
                  </center>
                </Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                    <h1 style={{ fontSize: "28px", fontFamily: "Times New Roman" }}>{posts.headline}</h1>
                  </center></Item>
              </Grid>
            </Grid>
          </div>
          <div>
            <br /><br /><br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default UserPanel;