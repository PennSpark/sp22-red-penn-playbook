import {
    Routes, Route, Outlet, Link, useNavigate,
  } from 'react-router-dom'
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'
  
  const UnderButtonResults = () => {
    return (
      <>
          <h1>Here are your results!</h1>
          <h2>You are a quite a _____ Penn student with your liking in type of cereal an would rather have a pause/rewind button in your life</h2>
          <h2>You are a quite a _____ Penn student as you would rather change genders??? and be the center of attention</h2>
          <h2>You are a quite a _____ Penn student as you like boba and the job question</h2>
          <h3>You chose the minority answer in x/15 of the questions</h3>
      </>
    )
  }
  
  export default UnderButtonResults
  