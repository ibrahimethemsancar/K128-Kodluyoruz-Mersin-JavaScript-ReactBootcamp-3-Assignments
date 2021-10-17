import axios from "axios"

const categoryAct = (url)=>dispatch=>{
    dispatch({type:"GET_NEWS_START"})
      fetch(url).then(res=> res.json())
     .then(response=>dispatch(({type:"GET_NEWS",payload:response}))
     ).catch(error=>dispatch({type:"GET_NEWS_ERROR", payload:error}))
 }
  export default categoryAct