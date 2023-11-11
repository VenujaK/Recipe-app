// components/RecipeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ history }) => {
  const [recipe, setRecipe] = useState({
    recipeName: '',
    ingredients: '',
    description: '',
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/recipes', recipe);
      // Optionally, you can redirect the user to the recipe list page after successful submission
      history.push('/');
    } catch (error) {
      console.error('Error submitting recipe:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label">
            Recipe Name
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeName"
            name="recipeName"
            value={recipe.recipeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
