import React ,{ useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import styles from "../Styles/About.module.css"
 
const About = () => {
    const {id}=useParams();
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
  return (
    <>
   {loading ? <h2>Loading</h2> : <div className={styles.aboutcomponentcontainer}>
    <div className={styles.aboutContainer}>
      <div>
        {data.about}
      </div>
      <div>
        Author:{data.author}
      </div>
    </div>
    </div>}
    
    </>
  )
}

export default About