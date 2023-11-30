import '../App.css';
function Home() {
  return (
    <div>
    <div class="container test">
      <div class="row">
        <div class="col-md pt-3">
          <img src="mypic.png" alt="MyPic" width= "80%"/>
        </div>
        <div class="col-md">
          <div>
            <h1 class="text-left ml-4 pt-4">Hello World! I'm</h1>
          </div>
          <h1 class="text-left ml-4">Silviya S</h1>
          <h1 class="text-left ml-4"> Front End Developer and,</h1>
          <h1 class="text-left ml-4"> Content Creator</h1>
          <h5 class="text-left ml-4 pt-4" style={{ color: "grey" }}>Learn more <a href = "/about" style={{color: "black"}}><b>About</b></a> me!</h5>
          <div class="text-left ml-4 pt-4">
            <a href="https://docs.google.com/document/d/1ESH3FUsb_V9AGs9rWv5a0pO0SCPvXP0i1fsRLwqcPX4" download="MyExampleDoc" target='_blank' rel="noreferrer" class=" pt-4">
              <button type="button" class="btn btn-light">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;