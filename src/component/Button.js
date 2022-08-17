import { React, useRef } from 'react';


const Buttonshow = ({funsetstate,showMassege,setshowMassege}) => {

  const btnRef = useRef(null)
  const closeOpenMenus = (e)=>{
    if(btnRef.current && showMassege && !btnRef.current.contains(e.target)){
      setshowMassege  (false)
    }
}
document.addEventListener('mousedown',closeOpenMenus)


  return (
    <div>
        <button ref={btnRef} onClick={funsetstate}>show masseg</button>
    </div>
  )
}

export default Buttonshow