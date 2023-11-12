import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeEdit = () => {
  const { id } = useParams(); // sperate id from url param
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    recipeName: '',
    ingredients: '',
    description: '',
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/recipes/${id}`, recipe);
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div className="container mt-4">
  <h2>Edit Recipe</h2>
  <form>
    <div className="mb-3">
      <label className="form-label">Recipe Name</label>
      <input
        type="text"
        className="form-control"
        value={recipe.recipeName}
        onChange={(e) => setRecipe({ ...recipe, recipeName: e.target.value })}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Ingredients</label>
      <input
        type="text"
        className="form-control"
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea
        className="form-control"
        value={recipe.description}
        onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
      />
    </div>

    <button type="button" className="btn btn-primary" onClick={handleUpdate}>
      Update Recipe
    </button>
  </form>
</div>

  );
};

export default RecipeEdit;
