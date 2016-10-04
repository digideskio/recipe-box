import React from 'react';
import $ from 'jquery';

import Loader from './Loader';
import SearchBox from './SearchBox';
import RecipeList from './RecipeList';
import { Link, browserHistory } from 'react-router';

export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            tags: []
        });
    },

    componentWillMount() {

        var self = this;
        $.ajax({
            url: '/api/tags/',
            success: function (data) {
                self.setState({
                    loading: false,
                    tags: data,
                });
            }
        });
    },

    searchByTitle(query) {
        browserHistory.push(`/search/${query}/`);
    },

    render() {

        var self = this;
        var randomQuote = function() {
            var randomNumber = Math.random();
            var quote = {};
            if (randomNumber < 0.2) {
                quote.quote = "If you're afraid of butter, use cream.";
                quote.attribution = "Julia Child";
            }
            else if (randomNumber < 0.4){
                quote.quote = "I know who in the family is a great cook. I know where the great recipes are.";
                quote.attribution = "Irma S. Rombauer";
            }
            else if (randomNumber < 0.6){
                quote.quote = "Food is our common ground, a universal experience.";
                quote.attribution = "James Beard";
            }
            else if (randomNumber < 0.8){
                quote.quote = "Man is born to eat.";
                quote.attribution = "Craig Claiborne";
            }
            else {
                quote.quote = "Good food is very often, even most often, simple food.";
                quote.attribution = "Anthony Bourdain";
            }
            return (
                <div className="quote-container">
                    <div className="quote">&ldquo;{quote.quote}&rdquo;</div>
                    <div className="attribution">{quote.attribution}</div>
                </div>
            );
        };

        var tagsList = function() {

            var tags = self.state.tags;

            return tags.map(function(tag) {
                return (
                    <Link to={`/tag/${tag.id}`} key={tag.id}>
                        <div className="tag">
                            {tag.name}
                        </div>
                    </Link>
                )
            })

        };

        if (this.state.loading) {
            return (
                <Loader/>
            );
        }

        else {
            return (
                <div className="home-page narrow-container">
                    <div className="toolbar">
                        <Link to='/recipe/add'>
                            <button className="primary">
                                <i className="fa fa-plus"/>
                                Add Recipe
                            </button>
                        </Link>
                    </div>

                    {randomQuote()}

                    <section>
                        <h2>Find Recipes by Title</h2>
                        <SearchBox
                            handleSubmitFunction = {this.searchByTitle}
                        />
                    </section>

                    <section>
                        <h2>Find Recipes by Tag</h2>
                        <div className="tags">
                            {tagsList()}
                        </div>
                    </section>
                </div>
            )
        }

    }
})