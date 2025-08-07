import './App.css'
import myVideo from '/video.mp4';
import chabotLogo   from '/chabotLogo.svg'
import dojoLogo     from '/dojologo.svg'
import crealityLogo from '/crealitylogo.png'
import openmvLogo   from '/openmvlogo.png'
import dfrobotLogo   from '/dfrobotlogo.png'
import polymakerLogo   from '/polymakerlogo.png'
import altiumLogo   from '/altiumlogo.png'
import solidLogo   from '/solidworkslogo.png'
import maxonLogo   from '/maxonlogo.png'

function App() {

  return (
      <div className='wrapper'>
        <div className='content-a'>
            <img src={chabotLogo} alt="-[:]"/>
        </div>
        <div className='content-b'>
            <video autoPlay muted loop playsInline>
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='content-b-mask'>
            El combustible es la pasión
        </div>
        <div className='content-c'>
            <h1> PATROCINADORES </h1>
            <div className='inner-content-c-big'> 
                <img src={dojoLogo} alt="Dojo Robot"/>
                <img src={crealityLogo} alt="Creality"/>
            </div>
            <div className='inner-content-c-small'> 
                <img src={openmvLogo} alt="OpenMV"/>
                <img src={dfrobotLogo} alt="DFRobot"/>
                <img src={polymakerLogo} alt="Polymaker"/>
                <img src={maxonLogo} alt="Maxon"/>
                <img src={solidLogo} alt="SolidWorks"/>
                <img src={altiumLogo} alt="Altium"/>
            </div>
        </div>
      </div>
  )
}

export default App
