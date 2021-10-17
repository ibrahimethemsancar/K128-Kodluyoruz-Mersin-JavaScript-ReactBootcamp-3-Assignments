import React,{useEffect,useState} from 'react'
import {
    BrowserRouter as Router,
    Link,
    useParams,
  } from "react-router-dom";
import {useDispatch} from 'react-redux'
import categoryAct  from './actions/index2';
import {connect} from 'react-redux'
 function CategoryNews(props) {
    
    const API_KEY='ccd5b2403a94433e877e90357007bb13'
    let {category}=useParams()
    const url = `https://newsapi.org/v2/everything?language=tr&q=${category}&apiKey=${API_KEY}`;
   const [news,setNews]=useState([])
   const get= ()=>{
       
       
       props.categoryAct(url)
       console.log(props.news)
    }  
    useEffect(() => {
        //Response dönmeden articles dizisi render edildiği için ödevi tamamlayamadım.
        
        get()
    }, [])
    
    return (
       
    <div>
        {props.status=='ok' &&  
        props.news.articles.map((item,index)=>{
            return(
            <div class="col-4" key={index}>
           <div class="card h-100">
           <Link to={`/categoryNews/${item.category}`}><img src={item.urlToImage} class="card-img-top img" alt="..." /></Link>
             <div class="centered">{item.author}</div>
           </div>
         </div>)
           
        })
        }
    </div>
    
        
    )
}
const mapStateToProps=state=>{
    return{
        news:state.news,
        isLoading:state.isLoading
    }
}
export default connect(mapStateToProps,{categoryAct})(CategoryNews)
