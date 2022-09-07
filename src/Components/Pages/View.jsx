import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function View() {
    const [data, setData] = useState([]);

    const serverHost = 'http://localhost:4000';

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
        setData(entries);
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

    function formatDate(myDate){
        const [day, month, year] = myDate.split('-');
        var strDate = year + '-' + month + '-' + day;
        return strDate;
    }

    useEffect(() => { fetchData() }, []);

    const listItems = data.map((data) =>
    <div>
        <li key={data.id} style={{ width: 90 + '%', margin: '20px', boxShadow: '10px', flex: '1', whiteSpace: 'pre-line'}}>
            <div className="container is-responsive card-shadow" style={{ width: 90 + '%', margin: '20px', boxShadow: '10px', flex: '1'}}>
                <div className="card" style={{ position: 'relative', padding: '20px', display: 'flex', flexDirection: 'column', flex: '1', alignContent: 'space-between'}}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                        <div><p className="title is-4" style={{ marginBottom: '0.3em'}}>{data.title}</p></div>
                        <time dateTime="2016-1-1" >Created on {formatDate(data.date)}</time>
                        </div>                      
                    </div>
                    <div className="content">
                        {data.text.replace(/\n/g,'\n')}<br/>
                    </div>
                    <div className="media-content" style={{ display: 'flex', flexDirection: 'row'}}>
                        <Link to='/edit' className="button is-warning is-fullwidth" style={{ marginRight: '1em'}}><span>Edit</span></Link>
                        <Link to='/delete' onClick={deleteEntry.bind(data, data.id)} className="button is-danger is-fullwidth" style={{ marginRight: '1em'}}><span>Delete</span></Link>
                </div>
                </div>
            </div>
            </div>
        </li>
        </div>
    );

    return (
        <div id="bread2">
            <br/>
            <section>
            <div className="container">
                <ul>{listItems}</ul>
            </div>
            </section>
            <br/><br/>
        </div>
    );
}

export default View;