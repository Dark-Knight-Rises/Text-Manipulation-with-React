import React, { useState } from 'react'

export default function Textbox() {
    const [text, settext] = useState('empty')
    const upCase = () => {
        let temp = text.toLocaleUpperCase()
        settext(temp)
    }
    const lowCase = () => {
        let temp = text.toLocaleLowerCase()
        settext(temp)
    }
    const handleonChange = (event) => {
        settext(event.target.value)
    }
    const clrBtn = () => {
        settext('')
    }
    return (
        <>
            <div className="my-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter the text to scan.</h2></label>
                <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows={8} defaultValue={""} />
                <div>
                    <button className="btn btn-primary mx-2 my-2" onClick={upCase} type="submit">Uppercase</button>
                    {/* <button className="btn btn-primary mx-2 my-2"  type="submit">Lowercase</button> */}
                    <button className="btn btn-primary mx-2 my-2" onClick={lowCase} type="submit">Lowercase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={clrBtn} type="submit">Clear</button>
                    <button className="btn btn-primary mx-2 my-2" type="submit">Button</button>
                </div>
            </div>
            <div className="container my-2" >
                <h3>The text you entered has: </h3>
                <h5>Your text has {text.length} characters and {text.split(" ").length} words in it</h5>
            </div>
        </>

    )
}
