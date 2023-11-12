import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

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
//recipe details section
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
