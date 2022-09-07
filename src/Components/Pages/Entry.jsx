import React from "react";
import { useState } from "react";

function Entry() {
    const [date, setDate] = useState({});
    const [title, setTitle] = useState({});
    const [text, setText] = useState({});

    const serverHost = 'http://localhost:4000';

    async function addEntry(date, title, text) {
        const sizeresponse = await fetch('http://localhost:4000/size');
        const data = await sizeresponse.json();
        const thekey = 1 + parseInt(data.size);
        console.log(thekey)

        const [year, month, day,] = date.split('-');
        let myDate = day + '-' + month + '-' + year;

        const url = serverHost + '/entries';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: thekey,
                date: myDate,
                title,
                text
            })
        }

        const response = await fetch(url, options);
        if (response.status === 200) {
            if (window.confirm("Your journal was successfully updated")) document.location = 'http://localhost:3000/journal'
        }
    }

    const handleTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleText = (e) => {
        const value = e.target.value;
        setText(value);
    }

    const handleDate = (e) => {
        const value = e.target.value;
        setDate(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(date, title, text);
    }

    return (
        <div className="container is-fluid">
            <form onSubmit={handleSubmit}>
                <br />
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" placeholder="Enter title" spellCheck="true" type="text" name="title" onChange={handleTitle} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input className="input" placeholder="dd-mm-yyyy" spellCheck="true" type="date" name="title" onChange={handleDate}></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Journal Entry</label>
                    <div className="control">
                        <textarea className="textarea" rows="12" spellCheck="true" placeholder="Enter your journal entry and click submit" name="text" type="text" onChange={handleText}></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <input className="button is-warning" spellCheck="true" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Entry;