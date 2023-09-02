import "./App.css"

const Page1 = () =>{
return(
  <section id="page1">
  <div className="top_bar">
    <span style={{fontSize:"25px"}}>DD</span>
    <span id="animated-text" style={{display:"flex",justifyContent:"center", marginTop:"0px", top:"0px", fontSize:"25px",position:"relative" ,left:"1000000"}}>Dmail</span>
    <div style={{display:"flex",justifyContent:"center",marginTop:"40vh",fontSize:"20px"}}><p>Personalize Your ,<a style={{color:"#FFD23F"}}>E</a>mail Experience with Our
 Dynamic <span style={{color:"#FFD23F",marginLeft:"5px"}}> E</span>mail Generator! 📧✨</p></div>
  </div>
  <div style={{display:"flex", justifyContent:"center", alignItems:"end", marginTop:"30vh"}}>
  <svg className="bounce-text" style={{fill:"#E57C04"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>  </svg>
  <span className="bounce-text" style={{color:"#E57C04", marginLeft:"10px"}}>  scroll down</span>
  </div>
  </section>
)
}
const Page2 =() =>{
return(
  <section id="page_2">
    <div id="grid">
      <div className="gridItems" style={{textAlign:"center"}}>s.no</div>
      <div className="gridItems" style={{textAlign:"center"}}>&1&</div>
      <div className="gridItems" style={{textAlign:"center"}}>&2&</div>
      <div className="gridItems" style={{textAlign:"center"}}>&3&</div>
      <div className="gridItems" style={{textAlign:"center"}}>email</div>
      <div className="gridItems" style={{textAlign:"center",  height:"45px"}}>1</div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div> 
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"190px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems" style={{textAlign:"center", height:"45px"}}>2</div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div> 
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"190px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems" style={{textAlign:"center", height:"45px"}}>3</div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div> 
      <div className="gridItems"><input style={{width:"90px", height:"40px"}} type="textbox" /></div>
      <div className="gridItems"><input style={{width:"190px", height:"40px"}} type="textbox" /></div>
     
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div id="egtxt" >
        <a style={{color:"#000000"}}>use &1&,&2&,&3& to change the corresponding values eg: hello &1& of class &2&</a>
      </div>
      </div>
      <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
      <textarea style={{borderRadius:"10px"}} id="mailInput" name="input" rows="6" cols="90"></textarea>
    </div>
    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
    <button id="gen_butt" className="button-52" type="button" style={{display:"flex", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>generate</button> 
    </div>
  </section>
)
}

const Page3 =()=>{
  return(
    <section id="page3">
        <div id="p3">
          <div className="gen_mail">
            <a className="em_txt">Email:</a><a id="mailId1"></a>
            <div className="in_gen_mail"></div>
          </div>
          <div className="gen_mail">
          <a className="em_txt">Email:</a><a id="mailId2"></a>
          <div className="in_gen_mail"></div>
          </div>
          <div className="gen_mail">
          <a  className="em_txt">Email:</a><a id="mailId3"></a>
          <div className="in_gen_mail"></div>
          </div>
        </div>
    </section>

  )
}
const App = () =>{
  return(
    <div>
<Page1 />
<Page2 />
<Page3 />
</div>
)
}

export default App;
