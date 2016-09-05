import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

export default React.createClass({

    propTypes: {
        recipe: React.PropTypes.object.isRequired,
        handleEditButton: React.PropTypes.func.isRequired
    },

    markdownToHTML(markdown) {
        var md = new Remarkable();
        var rawMarkup = md.render(markdown);
        return { __html: rawMarkup };
    },

    render() {

        var recipe = this.props.recipe;

        var ingredients = recipe.ingredients.map(function (ingredient) {
            return (
                <li>
                    {ingredient.quantity} {ingredient.name}
                    {/* append a comma if ingredient includes preparation */ }
                    { ingredient.preparation ? ', ' + ingredient.preparation : ''}
                </li>
            );
        });

        var tags = recipe.tags.map(function (tag) {
            return (
                <div className="tag">
                {tag.name}
                </div>
            )
        })

        if ($.isEmptyObject(recipe)) {
            return 'Recipe not found...';
        }
        else {
            return (
                <div className="recipe-viewer narrow-container">
                    <section>
                        <h1 className="title">{recipe.title}</h1>
                        <div className="divider"></div>
                        { recipe.description ?
                            <div>
                                <p className="description">{recipe.description}</p>
                                <div className="divider"></div>
                            </div>
                        :
                            ''
                        }
                        <div className="yields">{recipe.yields}</div>
                        <div className="times">
                            <div>
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                <span className="label">Cooking Time:</span> {recipe.cooking_time}
                            </div>
                            <div>
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                <span className="label">Prep Time:</span> {recipe.prep_time}
                            </div>
                        </div>
                    </section>

                    <section className="ingredients">
                        <h3 className="subhead">Ingredients</h3>
                        <ul className="ingredients-list">
                            {ingredients}
                        </ul>
                    </section>

                    <section className="instructions">
                        <h3 className="subhead">Instructions</h3>
                        <p>
                            <span dangerouslySetInnerHTML={this.markdownToHTML(recipe.instructions)}></span>
                        </p>
                        { recipe.serve_with ?
                            <p><span class="label">Serve With:</span> {recipe.serve_with}</p>
                        :
                            ''
                        }
                    </section>
 
                    <section className="notes">
                        { recipe.notes ?
                            <div>
                                <h3 className="subhead">Notes</h3>
                                {recipe.notes}
                            </div>
                            :
                            ''
                        }
                    </section>


                    { recipe.tags ?
                        <div>
                            <h3 className="subhead">Tags</h3>
                            <div className="tags">
                                {tags}
                            </div>
                        </div>
                        :
                        ''
                    }
                    <div className="divider"></div>
                    <div className="buttons-wrapper">
                        <button className="primary" onClick={this.props.handleEditButton}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true" />
                            Edit Recipe
                        </button>
                    </div>
                </div>
            )
        }
    }
})