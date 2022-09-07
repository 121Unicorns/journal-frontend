import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Journal() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const serverHost = 'http://localhost:4000';

    const fetchData = async () => {
        const url = serverHost + '/entries';
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        const response = await fetch(url, options);
        const entries = await response.json();
        setData(entries);
    }

    useEffect(() => { fetchData() }, []);

    async function handleClick(index) {
        const url = serverHost + '/selected';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: index })
        }
        await fetch(url, options);
    }

    //DELETE A JOURNAL ENTRY
    async function deleteEntry(index) {
        if (window.confirm("Are you sure you want to delete this post?") === true) {
            const url = serverHost + '/delete';
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: index }),
            }
            var response = await fetch(url, options);
            const outcome = await response.json();
            if (window.confirm(outcome.message)) document.location = 'http://localhost:3000/journal';
        } else {
            document.location = 'http://localhost:3000/journal';
        }
    }

    function limit(string = '', limit = 0) {
        return string.substring(0, limit)
    }

    const handleDate = (e) => {
        fetchData();
        const value = e.target.value;
        setDate(value);
    }

    function searchDate(){
        var temp = data.filter((item) => item.date===date);
        setData(temp);
    }

    function formatDate(myDate){
        const [day, month, year] = myDate.split('-');
        var strDate = year + '-' + month + '-' + day;
        return strDate;
    }

    const handleSearch = (e) => {
        fetchData();
        const value = e.target.value;
        setSearchText(value);
    }

    function searchTexts(){
        var temp = data.filter((item) => item.text.toLowerCase().includes(searchText.toLowerCase())||item.title.toLowerCase().includes(searchText.toLowerCase()));
        setData(temp);
    }

    const listItems = data.map((data, index) =>
        <div>
            <li key={data.id}>
                <div className="container is-responsive card-shadow" style={{ width: 90 + '%', margin: '20px', boxShadow: '10px', flex: '1' }}>
                    <div className="card" style={{ position: 'relative', padding: '20px', display: 'flex', flexDirection: 'column', flex: '1', alignContent: 'space-between' }}>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <div><p className="title is-4" style={{ marginBottom: '0.3em' }}>{data.title}</p></div>
                                    <time dateTime="2016-1-1" >Created on {formatDate(data.date)}</time>
                                </div>
                            </div>
                            <div className="content">
                                {(limit(data.text, 300).concat("..."))}<br />
                            </div>
                            <div className="media-content" style={{ display: 'flex', flexDirection: 'row' }}>
                                <Link to='/view' onClick={handleClick.bind(data, data.id)} className="button is-success is-fullwidth" style={{ marginRight: '1em' }}><span>View</span></Link>
                                <Link to='/edit' onClick={handleClick.bind(data, data.id)} className="button is-warning is-fullwidth" style={{ marginRight: '1em' }}><span>Edit</span></Link>
                                <Link to='/delete' onClick={deleteEntry.bind(data, data.id)} className="button is-danger is-fullwidth" style={{ marginRight: '1em' }}><span>Delete</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );

    return (
        <div id="bread2">
            <br />
            <div className="container" style={{ position: 'sticky', top: '2em', zIndex: "10" }}>
                <div className="container is-widescreen" style={{ width: 90 + '%', marginTop: '10px', marginRight: '10px', marginLeft: '20px' }}>
                    <div className="card has-background-grey" style={{ padding: '20px' }}>
                        <div className="card-content">
                            <div className="columns is-desktop">
                                <div className="column is-one-third">
                                    <div className="field has-addons">
                                        <p className="control is-expanded"><span><input className="input" placeholder="dd-mm-yyyy" type="date" name="title" onChange={handleDate}></input></span></p>
                                        <p className="control is-expanded"><a className="button is-warning is-fullwidth" onClick={searchDate}>Search</a></p>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="field has-addons">
                                        <p className="control is-expanded"><span><input className="input" placeholder="Enter text" type="text" name="title" onChange={handleSearch}></input></span></p>
                                        <p className="control is-expanded"><a className="button is-warning is-fullwidth" onClick={searchTexts}>Search</a></p>
                                    </div>
                                </div>
                                <div className="column">
                                    <button className="button is-fullwidth is-success" onClick={fetchData}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <ul>{listItems}</ul>
                </div>
            </section>

            <br /><br />
        </div>
    );
};

export default Journal;