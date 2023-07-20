import React, { useState } from 'react';
import Recipe from '../interfaces';
import CookiesImage from './cookies.jpg';
export { };



const DetailsSection: React.FC = () => {

    const [currentRecipe, setCurrentRecipe] = useState<Recipe>({
        id: 0,
        name: '',
        ingredients: '',
        instructions: '',
        cookingTime: 0,
        publicationDate: new Date(),
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCurrentRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setCurrentRecipe({
            id: 0,
            name: '',
            ingredients: '',
            instructions: '',
            cookingTime: 0,
            publicationDate: new Date(),
        });
    };


    const handleFormClear = () => {
        setCurrentRecipe({
            id: 0,
            name: '',
            ingredients: '',
            instructions: '',
            cookingTime: 0,
            publicationDate: new Date(),
        });
    };

    return (
        <div className="details-section" style={{ backgroundColor: '#E6BA95', color: "#362222", fontFamily: "initial", fontSize: "20px" }}>
            <h2>Recipe Details</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:   </label>
                <input type="text" id="name" name="name" value={currentRecipe.name} onChange={handleInputChange} required />
                <br></br>
                <label htmlFor="ingredients">Ingredients:   </label>
                <textarea id="ingredients" name="ingredients" value={currentRecipe.ingredients} onChange={handleInputChange} required />
                <br></br>
                <label htmlFor="instructions">Instructions:</label>
                <textarea id="instructions" name="instructions" value={currentRecipe.instructions} onChange={handleInputChange} required />
                <br></br>
                <label htmlFor="cookingTime">Cooking Time:</label>
                <input
                    type="number"
                    id="cookingTime"
                    name="cookingTime"
                    value={currentRecipe.cookingTime}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Save</button>
                <button type="button" onClick={handleFormClear}>Clear</button>
            </form>
        </div>
    );
};

export default DetailsSection;