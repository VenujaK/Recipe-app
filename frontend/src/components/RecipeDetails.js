// components/RecipeDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Recipe Details</h2>
      <p>Recipe Name: {recipe.recipeName}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Description: {recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;