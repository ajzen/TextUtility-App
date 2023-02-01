import React, {useState} from 'react'



export default function TextForm(props) {
    const [myText, setText] = useState("Default Text of use state"); 

    const uppercaseButtonHandleOnClick = () => {
        let newText = myText.toUpperCase();
        setText(newText);
        console.log("Upper case button clicked");
    }

    const lowercaseButtonHandleOnClick = () => {
        let newText = myText.toLowerCase();
        setText(newText);
        console.log("Lower case button clicked");
    }

    const clearTextButtonHandleOnClick = () => {
        let newText = '';
        setText(newText);
        console.log("Clear text button clicked");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log("Text handle on change : " + myText)
    }
    const copyTextHandleOnClick = () => {
        const txtToCopy = document.getElementById("textBoxId");
        txtToCopy.select();
        navigator.clipboard.writeText(myText);
    }

  return (
    
    <>
    <div style={{backgroundColor : props.mode === "light" ? "white" : "#212529", color : props.mode === "light" ? "#212529" : "white"}}>
        <h1>{props.heading}</h1>
        <div className={`mb-3 container text-${props.mode === "light" ? "dark" : "light"}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{backgroundColor : props.mode === "light" ? "white" : "#212529", color : props.mode === "light" ? "#212529" : "white"}}/>
            </div>
            <div className="mb-3">
            <label htmlFor="mybox" className="form-label">Enter your Text below</label>
            <textarea className="form-control" value={myText} onChange={handleOnChange} id="textBoxId" rows="8" style={{backgroundColor : props.mode === "light" ? "white" : "#212529", color : props.mode === "light" ? "#212529" : "white"}}></textarea>

            <button className={`btn btn-primary my-3`} onClick={uppercaseButtonHandleOnClick} >Covert to upper case</button>
            <button className={`btn btn-primary mx-1`} onClick={lowercaseButtonHandleOnClick} >Covert to lower case</button>
            <button className={`btn btn-primary mx-1`} onClick={clearTextButtonHandleOnClick} >Covert to clear text</button>
            <button className={`btn btn-primary mx-1`} onClick={copyTextHandleOnClick} >Copy text</button>
        </div>

        < div className="container">
            <p>
                Text has {myText.split(' ').length} words and {myText.length} characters
            </p>    
            <p>
                Text will take {myText.length*0.008} minutes to read the text
            </p>
        </div>


        <div className="container" >
            <h2>
                Preview of the Text
            </h2>
            <p>
                {myText}
            </p>
        </div>
    </div>
 
    </>
    
  )
}

TextForm.prototype = {
    heading : String
}

