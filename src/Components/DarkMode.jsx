import React from 'react';
import { IoIosMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';


const DarkMode = () => {
    const setDarkMode=()=>{
        document.querySelector("html").setAttribute("data-theme","dark")
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightMode=()=>{
        document.querySelector("html").setAttribute("data-theme","light")
         localStorage.setItem("selectedTheme","light")
    }

    const selectedTheme=localStorage.getItem("selectedTheme")

    if(selectedTheme==="dark"){
        setDarkMode()
    }
    else{
        setLightMode()
    }

   const toggleTheme=(e)=>{
             if(e.target.checked){
                setDarkMode()
             }
             else{
                setLightMode()
             }
   }

    
    return (
        <div className='btn btn-circle border-0 bg-base-200 '>
            <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={toggleTheme}/>

  {/* sun icon */}
 <IoSunnyOutline  className="swap-on h-5 w-5 fill-current" />

  {/* moon icon */}
  <IoIosMoon className="swap-off h-5 w-5 fill-current" />
</label>
        </div>
    );
};

export default DarkMode;
