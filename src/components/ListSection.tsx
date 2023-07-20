import React, { useState } from 'react';
import Recipe from '../interfaces';
import recipeData from '../data/recipes.json';
import './styles.css';
<head>
    <link rel="stylesheet" href="./src/styles.css" />

</head>

const ListSection: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>(() => {
        const parsedRecipes: Recipe[] = recipeData.map((recipe) => ({
            ...recipe,
            publicationDate: new Date(recipe.publicationDate),
        }));
        return parsedRecipes;
    });

    const handleDeleteRecipe = (id: number) => {
        const updatedRecipes = recipes.filter((recipe: Recipe) => recipe.id !== id);
        setRecipes(updatedRecipes);
    };

    return (
        <div className="list-section" style={{ backgroundColor: 'bisque', color: '222831', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="background-image" />
            <h2 style={{ fontFamily: "initial", fontSize: "35px", color: "362222#" }}>___Recipe List___</h2>

            <ul>               {recipes.map((recipe: Recipe) => (
                <li key={recipe.id}>
                    <p>ID: {recipe.id}</p>
                    <p>Name: {recipe.name}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <p>Cooking Time: {recipe.cookingTime}</p>
                    <p>Publication Date: {recipe.publicationDate.toLocaleDateString()}</p>

                    <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                    <hr></hr>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ListSection;
