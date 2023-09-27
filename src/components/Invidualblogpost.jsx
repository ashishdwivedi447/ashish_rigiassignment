import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "../Styles/Individualblogpost.module.css"

const Invidualblogpost = () => {
const {id}=useParams();
const navigate=useNavigate();
const[data,setData]=useState("");
const[loading,setLoading]=useState(true)

useEffect(()=>{
  axios.get(`https://foremost-bronzed-galley.glitch.me/blogpost/${id}`)
  .then((res)=>{
    setData(res.data)
    setLoading(false)
  })
  .catch((error)=>console.log(error))
  },[])

  console.log("data" ,data,id)
  return (

    <>
    {loading ? <h2>Loading</h2> :<div className={styles.componentcontainer}>
        <div className={styles.contentcontainer}>
          <p>
           {data.content}
          </p>
        <button onClick={()=>{
            navigate("/")
        }} className={styles.gobackbutton}>Go back</button>
        </div>
         
       
    </div>}
    
    </>
  )
}

export default Invidualblogpost