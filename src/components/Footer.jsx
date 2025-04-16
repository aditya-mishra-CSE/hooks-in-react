import React from 'react'
import { AppContext } from '../context/AddContext'
import { useContext } from 'react';
const Footer = () => {
  
    const {phone} = useContext(AppContext);

    return (
    <div>
        <h2>Footer</h2>
        <h3>Phone: {phone} </h3>
    </div>
  )
}

export default Footer