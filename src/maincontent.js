import React from "react";
import './maincontent.css';

export default function MainContent() 
{
    return(
        <div className="main--body">
            <h1 className="main--title"> Fun fact about React </h1>

            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>He was over 100K stars on Github</li>
                <li>IS maintained by Facebook</li>
                <li>Pwer thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>

    )
}
