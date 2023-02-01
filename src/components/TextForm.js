import React, {useState} from 'react'



export default function TextForm(props) {
    const [myText, setText] = useState("Default Text of use state"); 

    const handleOnClick = () => {
        let newText = myText.toUpperCase();
        setText(newText);
        console.log("Upper case button clicked");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log("Text handle on change : " + myText)
    }

  return (
    
    <>

    <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">Enter your Text below</label>
        <textarea className="form-control" value={myText} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>

        <button className={`btn btn-primary my-3`} onClick={handleOnClick} >Covert to upper case</button>
    </div>
 
    </>
    
  )
}

TextForm.prototype = {
    heading : String
}