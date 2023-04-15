import React from 'react'

export default function Footer() {
    let d = new Date();
    let year = d.getFullYear();
    console.log(year); 
    let obj1 = {
        fontSize: "20px",
        backgroundColor: "black",
        color: "white",
        marginTop: "15px",
        height: "30px"
    };
  return (
    <>
        <p className='text-center' style={obj1}>Copyright© made with ⚡ by Pritham {year}</p>
    </>
  )
}
