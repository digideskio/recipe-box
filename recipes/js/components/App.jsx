import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>

                <header>
                    <Link to="/">
                        <div className="app-title">
                            Recipe Box
                        </div>
                    </Link>
                </header>

                {this.props.children}

            </div>
        )
    }
})