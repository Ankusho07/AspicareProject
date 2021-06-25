 
 function Grid(props){



return(<>
<div className="Grid">{props.results.map((item)=>{

    

    return <div class="card my-2 mx-2 card" style={{ width: '500px' }} >
           <img src={item.urls.regular} style={{ height: '200px' }} class="card-img-top" alt="..." />
           <p>upload by: {" "+item.user.username}</p>
           
       </div>


      
       
       
  
    
    
    
    {/*  <img className="item" key={item.id} src={item.urls.regular} alt="" />*/}
  })}

</div>
</>
    )




 }


 export default Grid;