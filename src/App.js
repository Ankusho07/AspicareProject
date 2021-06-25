import React,{useState} from 'react';

import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Grid from './components/Grid'
import Footer from './components/Footer'





function App(){


  const [Value, setValue] = useState("")
 const[results,setresults] = useState([])



  //fetching APi
  const fetchImages = ()=>{
    
    fetch( ` https://api.unsplash.com/search/photos?client_id=aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5&query=${Value} █`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setresults(data.results)
    })
  }

    return(<>
    <Router>  
      <div className="col-sm-6 mx-auto text-white shadow-lg p-2">
<h1 className="heading text-center ">Aspicare Logistic Private Limited</h1>
</div>
      <Grid results={results}/>
      <Footer/>
      
     



<div className="App col-lg-2">
<div className="mydiv">


<input className="form-control text-black" type="text" placeholder="search your image " value={Value} onChange={(e)=>setValue(e.target.value)} name="" id="" />
<button className="btn btn-warning px-5"  style={{fontStyle:'italic', fontFamily:'cursive'}} onClick={()=>fetchImages()}>search </button>

</div>


<div className="gallery col-lg-10 ">





</div>

</div>





    </Router>
    
    </>)
    
}
export default App;