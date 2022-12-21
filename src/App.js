import React, { useState } from "react";
import './App.css';
import Header from './components/header/header';
import Form from './components/list/list';
import List from './components/form/form';

function App() {

 let [list,setList]=useState([])

  return (
    <div className="App">
  <Header />
  <Form  list={list} setList={setList}/>
  <List  list={list}/>
    </div>
  );
}

export default App;