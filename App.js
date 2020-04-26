import MainScreen from "./src/MainScreen";
import {Component} from 'react'
import React from "react";

export let mountTime;
export let renderTime;
export let startTime = Date.now();

export default class App extends Component {

   componentDidMount() {
      mountTime = Date.now();
   }

   render(){
      renderTime = Date.now();
      return <MainScreen/>
   }
}

