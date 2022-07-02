/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Latency = () => {

  const ws = new WebSocket('ws://localhost:55455/');

  ws.onopen = function() {
    console.log('WebSocket Client Connected');
      ws.onmessage = function(e) {
        console.log(e.data)
        ws.close()
    };

    

  };


 

  

  return (
    <div>
        Latency content

    </div>
  )
}

export default Latency