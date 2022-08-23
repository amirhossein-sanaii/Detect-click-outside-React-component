// import { useState } from 'react';
// import OutsideClickHandler from 'react-outside-click-handler';
// import './App.css';
// import Textmasseg from './component/Text'

// function App() {

//   const [Showmenu, setShowmwnu] = useState(false)
//   return (
//     <div className='App'>
//       <h1>Amir</h1>
//       <hr/>
//       <OutsideClickHandler onOutsideClick={()=>{
//         setShowmwnu(false)
//       }}>
//         <button onClick={() => { setShowmwnu(!Showmenu) }}>Show / Hide</button>
//         <hr />
//         {Showmenu ? <Textmasseg /> : null}
//       </OutsideClickHandler>
//     </div>
//   )
// }

// export default App



import { useState } from 'react';
import './App.css';
import Textmasseg from './component/Text'

function App() {

  const [Showmenu, setShowmwnu] = useState(false)
  return (
    <div className='App'>
      <h1>Amir</h1>
        <button onClick={() => { setShowmwnu(!Showmenu) }}>Show / Hide</button>
        <hr />
        {Showmenu ? <Textmasseg /> : null}
    </div>
  )
}

export default App