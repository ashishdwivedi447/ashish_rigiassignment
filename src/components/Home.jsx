import React from 'react'
import {useEffect,useState} from "react";
import axios from "axios"
import styles from "../Styles/Home.module.css";
import {Link} from "react-router-dom";
import About from './About';

const Home = () => {
const[data,setData]=useState([]);
const[loading,setLoading]=useState(true)
useEffect(()=>{
axios.get("https://foremost-bronzed-galley.glitch.me/blogpost")
.then((res)=>
{setData(res.data)
  setLoading(false)
})
.catch((error)=>console.log(error))
},[])
//console.log("Data",data);
  return (
    <>

    {loading ? <h2>Loading</h2> :<div class={styles.gridContainer}>
       {data?.map((elem)=>(
        <div key={elem.id} className={styles.boxconteiner}>
           <p>{elem.title}</p>
           <div className={styles.linktagcontainer}>
           <Link to={`/individualblogpost/${elem.id}`} className={styles.linktag}>Continue Reading...</Link>
           <Link to={`/about/${elem.id}`} className={styles.linktag}>About</Link>
           </div>
          
        </div>
       ))
}
      </div>}
      
    </>
  )
}

export default Home