import React, {useState} from 'react'

export default function Textbox() {
    const [text, settext] = useState('empty')
    return (
        <div className="my-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter the text to scan.</h2></label>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
            <div>
                <button className="btn btn-primary mx-2 my-2" type="submit">Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" type="submit">Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" type="submit">Clear</button>
                <button className="btn btn-primary mx-2 my-2" type="submit">Button</button>
            </div>
        </div>
    )
}
