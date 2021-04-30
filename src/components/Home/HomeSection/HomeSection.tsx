import React from 'react';
import { Link } from 'react-router-dom';

function HomeSection() {
    return <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/youtube">Youtube</Link>
        </li>
        <li><iframe title="zpow-map" src="https://www.google.com/maps/d/u/0/embed?mid=1LFqN2UIZOgnsO3mPK-XggYbhue60LrNI" width="640" height="480"></iframe></li>
    </ul>;
}

export default HomeSection;
