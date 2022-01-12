import imageequilibrium from './images/image-equilibrium.jpg';
import imageavatar from './images/image-avatar.png';

import './App.css';

function App() {
  return (

    <div className="content">


      <div className="image">
        <img className="image__img" src={imageequilibrium} alt="Bricks" />
        <div className="image__overlay">
          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h48v48H0z" /><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" /></g></svg>
        </div>
      </div>

      <h3 className="equilibrium">Equilibrium #3429</h3>
      <p style={{ color: "hsl(0, 0%, 70%)", margin: 0, paddingTop: 10 }}>Our Equilibrium collection promotes balance and calm.</p>

      <div className="hoziontal">
        <div style={{ color: "hsl(178, 100%, 50%)", margin: 0, paddingTop: 15 }}><svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>0.041ETH</div>
        <div style={{ color: "hsl(215, 51%, 70%)", margin: 0, paddingTop: 15 }}><svg width="17" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>3 days left</div>
      </div>
      <hr />
      <div className="footer" style={{ marginTop: 10 }}>
        <img className="image1" src={imageavatar} alt="imageavatar" />
        <p style={{ color: "hsl(0, 0%, 70%)" }}>Creation of <span className="footertext">Jules Wyvern</span></p>
      </div>



    </div>

  );
}

export default App;
