import React from 'react';

export default React.createClass({

    propTypes: {
        handleSubmitFunction: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return ({
            searchFieldText: ''
        });
    },

    handleSearchFieldChange(e) {
        this.setState({
            searchFieldText: e.target.value
        })
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmitFunction(this.state.searchFieldText);
    },

    render() {
        return (
            <form
                className="search-box"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    value={this.state.searchFieldText}
                    onChange={this.handleSearchFieldChange}
                />
                <button
                    className="primary"
                    type="submit"
                >
                    Search
                </button>

            </form>
        )
    }

})