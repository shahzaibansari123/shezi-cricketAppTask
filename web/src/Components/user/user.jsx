import React from "react";
import axios from 'axios';
import { baseUrl } from "./../../core";
import { useState, useEffect } from "react"
import io from 'socket.io-client';
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
          const socket = io("http://localhost:5000"); // to connect with locally running Socker.io server
  
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
    <center>
    <h1>{posts.tournament}</h1>

    <h1>{posts.matchDate}</h1>
    <h1>{posts.inning}</h1>
    <h1>{posts.teamOne}</h1>
    <h1>{posts.teamOneScore}</h1>
    <h1>{posts.teamOneWicket}</h1>
    <h1>{posts.teamTwo}</h1>
    <h1>{posts.teamTwoScore}</h1>
    <h1>{posts.teamTwoWicket}</h1>
    <h1>{posts.player1}</h1>
    <h1>{posts.player2}</h1>
    <h1>{posts.bowler1}</h1>
    <h1>{posts.bowler2}</h1>
    <h1>{posts.teamOneOvers}</h1>
    <h1>{posts.teamTwoOvers}</h1>
    <h1>{posts.toss}</h1>
    <h1>{posts.headline}</h1>
    </center>
    </>
    );
}

export default UserPanel;