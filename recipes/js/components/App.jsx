import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <h1>
                            Recipe Box App
                        </h1>
                    </Link>
                </header>
                {this.props.children}
            </div>
        )
    }
})