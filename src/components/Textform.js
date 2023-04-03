import React , {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
     const handleUpClick= ()=>{
        //console.log("Upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(' : Converted to upper case.', 'success');
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(' : Converted to lower case', 'success');
    }
    const handlestr_to_base64=()=>{
        setText(btoa(text));
        props.showAlert(' : Converted to base 64.', 'success');
    }

    const handlebase64_to_str=()=>{
        setText(atob(text));
        props.showAlert(' : Converted to text.', 'success');
    }
    const handleSpeakClick=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert(' : Started speaking.', 'success');

    }
    const handleExtraSpace = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert(' : Removed all the extra spaces.', 'success');
        }
    const handleClearClick=()=>{

        let newText="";
        setText(newText);
        props.showAlert(' : Text-Box cleared.', 'success');

    }
    const handleOnChange =(event)=>{
        //console.log("On changed");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'? 'white':'black'}}>
        <h4> {props.heading}</h4>
        <div className="mb-3">
           
              <textarea className="form-control" style={{backgroundColor: props.mode=== 'dark'? 'grey':'white' , color: props.mode=== 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="4"> </textarea>

        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleUpClick}>Change to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleLoClick}>Change to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handlestr_to_base64}>Encode to base64</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handlebase64_to_str}>Decode to base64</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleSpeakClick}>Speak the text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleExtraSpace}>Remove extra space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleClearClick}>Clear the text</button>                   
 
    </div>

    <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
        <br></br>
        <h5> Your text summary </h5>
        <p> <b>{text.split(" ").filter((element)=>{ return element.length!==0}).length } </b> Words and <b>{ text.length } </b>Characters </p>
        <p> <b>{  text.split(/[.?!]\s/).filter((element)=>{ return element.length!==0}).length    }</b> Sentences</p>
        <p><b> {text.split(/\r\n|\r|\n/).filter((element)=>{ return element.length!==0}).length} </b> Paragraphs</p>
        <p> <b>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length }</b> Minutes to read </p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter something in text box above to preview here."} </p>
    </div>
    </>
  )
}
