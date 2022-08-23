import { useRef, useState } from 'react';
import './App.css';
import Buttonshow from './component/Button';
import Main from './component/main';
import Textmasseg from './component/Text'

function App() {

  const [showMassege , setshowMassege] = useState(false)
  // const btnRef = useRef(null)

  const funsetstate = ()=>{
    setshowMassege(!showMassege)
  }


//   const closeOpenMenus = (e)=>{
//     if(btnRef.current && showMassege && !btnRef.current.contains(e.target)){
//       setshowMassege  (false)
//     }
// }
  // document.addEventListener('mousedown',closeOpenMenus)

  return (
    <div className="App" >
      App conponent
      <hr/>
      <Buttonshow showMassege={showMassege} setshowMassege={setshowMassege} funsetstate={funsetstate} />
      <hr/>
      <Main />
      {showMassege ? <Textmasseg/> : null }
    </div>
  );
}

export default App;
