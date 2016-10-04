import React from 'react';

export default React.createClass({

    propTypes: {
        tags: React.PropTypes.array.isRequired,
        addTagFunction: React.PropTypes.func.isRequired,
        removeTagFunction: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return ({
            addTagField: ''
        });
    },

    handleAddTagFieldChange(e) {
        this.setState({
            addTagField: e.target.value
        });
    },

    addTag(e) {
        e.preventDefault();
        if (this.state.addTagField != '') {
            this.props.addTagFunction(this.state.addTagField);
            this.setState({
                addTagField: ''
            });
        }
    },

    removeTag(index, e) {
        e.preventDefault();
        this.props.removeTagFunction(index);
    },

    render() {

        var self = this;
        var tags = this.props.tags.map( function(tag, index) {
            return (
                <div
                    className="tag"
                    onClick={self.removeTag.bind(self, index)}
                    key = {tag.id}
                >
                    {tag.name}
                    <i className="fa fa-times"/>
                </div>
            )
        })

        return (
            <div className="tags-editor">
                <div className="tags">
                    {tags}
                </div>
                <div className="add-tag">
                    <input
                        type="text"
                        value={this.state.addTagField}
                        onChange={this.handleAddTagFieldChange}
                    />
                    <button
                        className="primary"
                        onClick={this.addTag}
                    >
                        <i className="fa fa-plus-circle"/>
                        Add Tag
                    </button>
                </div>
            </div>
        );
    }

})