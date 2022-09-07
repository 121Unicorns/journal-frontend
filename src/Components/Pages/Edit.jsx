import React from "react";
import { useState, useEffect } from "react";

function Edit() {
    const [id, setId] = useState({});
    const [date, setDate] = useState({});
    const [title, setTitle] = useState({});
    const [text, setText] = useState({});

    const serverHost = 'http://localhost:4000';

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const url = serverHost + '/selected';
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        const response = await fetch(url, options);
        const entries = await response.json();
        const entries2 = entries[0];

        setText(entries2.text);
        setTitle(entries2.title);
        setId(entries2.id);
        setDate(entries2.date);
    }

    async function editEntry(title, text) {
        const url = serverHost + '/edit';
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                date: date,
                title: title,
                text: text
            })
        }

        const response = await fetch(url, options).then(response => response.json());
        if(window.confirm(response.message)) document.location = document.location = 'http://localhost:3000/journal'
    }

    const handleTitle = (e) => {
        const value = e.target.value;
        // console.log(value);
        setTitle(value);
    }

    const handleDate = (e) => {
        const value = e.target.value;
        // console.log(value);
        setDate(value);
    }

    const handleText = (e) => {
        const value = e.target.value;
        // console.log(value);
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editEntry(title, text);
        //addEntry(date, e.target.elements.title.value, e.target.elements.text.value);
    }

    return (
        <div className="container is-fluid">
            <br />
            <section>
                <div className="container">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <br />
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input className="input" placeholder="Enter title" spellCheck="true" type="text" name="title" onChange={handleTitle} value={title}></input>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Date</label>
                                <div className="control">
                                    <input className="input" placeholder="dd-mm-yyyy" spellCheck="true" type="date" name="title" onChange={handleDate} value={date}></input>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Journal Entry</label>
                                <div className="control">
                                    <textarea className="textarea" rows="12" placeholder="Enter your journal entry and click submit" spellCheck="true" name="text" type="text" onChange={handleText} value={text}></textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <input className="button is-warning" spellCheck="true" type="submit" value="Update" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <br /><br />
        </div>
    );
}

export default Edit;