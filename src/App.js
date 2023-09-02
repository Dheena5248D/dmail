import "./App.css"

const Page1 = () =>{
return(
  <section id="page1">
  <div className="top_bar">
    <span style={{fontSize:"25px"}}>DD</span>
    <span style={{display:"flex",justifyContent:"center", marginTop:"0px", top:"0px", fontSize:"25px"}}>Dmail</span>
    <div style={{display:"flex",justifyContent:"center",marginTop:"40vh",fontSize:"20px"}}>Personalize Your ,<a style={{color:"#FFD23F"}}>E</a>mail Experience with Our
 Dynamic <a style={{color:"#FFD23F",marginLeft:"5px"}}> E</a>mail Generator! 📧✨</div>
  </div>
  <div style={{display:"flex", justifyContent:"center", alignItems:"end", marginTop:"30vh"}}>
  <svg style={{fill:"#E57C04"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>  </svg>
  <span style={{color:"#E57C04", marginLeft:"10px"}}>  scroll down</span>
  </div>
  </section>
)
}


const App = () =>{
  return(
<Page1 />

)
}

export default App;
