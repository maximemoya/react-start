import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="react-start/">Home</Link>
                </li>
                <li>
                    <Link to="react-start/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;