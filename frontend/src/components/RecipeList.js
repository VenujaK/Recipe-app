// components/RecipeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <ul className="list-group">
        {recipes.map((recipe) => (
          <li key={recipe._id} className="list-group-item">
            <Link to={`/recipe/${recipe._id}`}>{recipe.recipeName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
