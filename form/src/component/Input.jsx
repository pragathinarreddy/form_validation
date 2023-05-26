import React, { useState } from "react";

function Input(){
    const[buttonDisable ,setButtonDisable]=useState(false);
    const[textArea,setTextArea]=useState('');


    

    const handleClick = ()=> {
        setButtonDisable(true);
    }

    const initialValue = 'Read-only value'

    const handleTextAreaChange = (event)=>{
        setTextArea(event.target.value);
    }


    return(
        <>
        <div className="form" >
            <div >
            <h2>Text Input</h2>
            <input  type="text" />
            </div>

            <div>
            <h2>Date Input</h2>
            <input className="date" type="date" />
            </div>

            <div>
            <h2>File Input</h2>
            <input className="file" type="file" />
            </div>

            <div>
            <h2>Read-only Input</h2>
            <input className="read"
             type="Read-only"
             value = {initialValue} Read only />
            </div>

            <div>
            <h2>Disabled Input</h2>
            <input className="disabled"
             type="Disabled"
             disabled = {buttonDisable} 
             onClick={handleClick}/>
            </div>

            <div>
            <h2>Text area</h2>
            <input className="area"
             type="Text area" 
             onClick={handleTextAreaChange}
             placeholder="Enter your text"/>
            </div>

            <div>
            <h2>Text area Disabled</h2>
            <input className="area_disabled"
             type="Text area Disabled"
             disabled ={buttonDisable}
             onClick={handleClick} />
            </div>

        </div>
        
        </>
    )
}
export default Input