import React from 'react';
import $ from 'jquery';

import RecipeList from './RecipeList';
import { Link } from 'react-router';

export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            data: []
        });
    },

    componentWillMount() {

        var self = this;
        $.ajax({
            url: '/api/recipes/',
            success: function (data) {
                console.log(data);
                self.setState({
                    loading: false,
                    data: data,
                });
            }
        });
    },

    render() {

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
                    <div className="quote">"{quote.quote}"</div>
                    <div className="attribution">{quote.attribution}</div>
                </div>
            );
        }

        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <div className="home-page narrow-container">
                    <nav>
                        <ul>
                            <li><Link to='/'>Recipe List</Link></li>
                            <li><Link to='/recipe/add'>Add Recipe</Link></li>
                        </ul>
                    </nav>
                    {randomQuote()}
                    <RecipeList recipes={this.state.data}/>
                </div>
            )
        }
    }
})