import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (recipeId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this recipe?');
  
    if (!shouldDelete) {
      return; 
    }
  
    try {
      const response = await axios.delete(`http://localhost:5000/api/recipes/${recipeId}`);
  
      if (response.status === 200) {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeId));
        window.location.reload();
      } else {
        console.error('Error deleting recipe:', response.data.message);
        alert('Error deleting recipe. Please try again later.');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      alert('Error deleting recipe. Please try again later.');
    }
  };
  


  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{recipe.recipeName}</h5>
                <p className="card-text">Ingredients: {recipe.ingredients}</p>
                <p className="card-text">Description: {recipe.description}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <div>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(recipe._id)}
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${recipe._id}`} className="btn btn-warning">
                      Edit
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
