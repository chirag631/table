import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {  TextField } from '@material-ui/core';
import EnhancedTable from "./Table";

const Home = () => {





  return (
    <div className="container">
      <div className="py-4">
        
        <div><EnhancedTable /></div>


        
      </div>
    </div>
  );
};

export default Home;
