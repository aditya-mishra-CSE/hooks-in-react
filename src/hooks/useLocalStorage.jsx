import React from 'react'
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
     const [name, setName] = useState(
    localStorage.getItem(key) ? 
    localStorage.getItem(key) : initialValue
  );

  useEffect(()=>{
    localStorage.setItem(key, name)
  },[key,name])

    return [name, setName]
}

export default useLocalStorage