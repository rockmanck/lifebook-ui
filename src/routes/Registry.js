import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Registry() {
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();

        const tempData = [...registryData]; // prepend previous data - spread operator
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("");
    }

    console.log(registryData);

    // subscribe on each change to input text
    // if length > 13 chars, fire error
    useEffect(() => {
        if (textInput.length > 13) setError(true);
        else                       setError(false);
    }, [textInput]);


    return (
        <div>
            <h1>Registry page</h1>
            <Link to="/">Go to Home page</Link>

            <form onSubmit={addItem}>
                <label>
                    text input:
                    <input type="text" value={textInput}
                           onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {error ? <span style={{color: "red"}}>Error occured.</span> : null}
        </div>
    )
}

export default Registry;