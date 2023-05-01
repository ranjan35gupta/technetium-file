import { useRef } from "react"
import './Button.css'

export function Button(){
    let inputRef = useRef()
    
    
    function handleEvent(){
        inputRef.current.click()
        // setShow('')
        
    }

    return(
     <div className="container">
    <input type="file" ref={inputRef} />

        
        <button onClick={handleEvent}>pick the file</button>
     </div>
    )
}