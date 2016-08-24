import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/recipes'>Recipe List</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
})