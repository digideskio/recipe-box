import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    },

    render() {

        return (
            <Link to={this.props.url} className="recipe">
                <h2>
                    {this.props.title}
                </h2>
            </Link>
        );

    }

})