import React , {useState} from 'react'

export default function TextForm(props) {


    const handleonchange = (event)=> {
        console.log("on cahnge") ;
        setText(event.target.value);
        
    }


    const handleUPClick = ()=> {
        console.log("upper was clicked");
        let newText = text.toUpperCase() ;
        setText(newText);
        props.a("to upper" , "success");
    }

     const handlelowClick = ()=> {
        console.log("lower was clicked");
        let newText = text.toLowerCase() ;
        setText(newText);
        props.a("to Lower" , "success");
    }

    const [text , setText]  = useState('') ;
  return (
    <div className='container' style ={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-8" style ={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <label for="exampleFormControlInput1" class="form-label">Text</label>
        <textarea className="form-control" value={text} onChange={handleonchange}  style = {{backgroundColor :props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black' }}id="exampleFormControlInput1" rows="8"></textarea>
        </div>
        
        <div className='container my-3' style ={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <button disabled = {text.length === 0} className='btn btn-primary' onClick={handleUPClick}> convert to uppercase</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-3' onClick={handlelowClick}> convert to lowecase</button>
        </div>
        <div className='container my-3' style ={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Summary of Text</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split('').filter((char)=>{return !char.match(/\s/)}).length} charecters</p>
            <p> {0.08 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} time to read (minutes) .</p>
            <h3> Preview</h3>
            <p>{text}</p>

            
         </div>

    </div>
  )
}
