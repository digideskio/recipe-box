import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Recipe Box App</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Recipe List</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
})