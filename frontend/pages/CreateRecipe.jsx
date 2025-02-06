import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const [cookingTime, setCookingTime] = useState('');
  const [tags, setTags] = useState('');
  const [imageURL, setImageURL] = useState('');
  const imageUploadRef = useRef(null);
  const imagePreviewRef = useRef(null);
  const Navigate = useNavigate(); 

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageURL(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const createRecipe = async (recipeData) => {
    try{
        const response = await axios.post('http://localhost:3000/api/recipes/create', recipeData, { withCredentials: true });
        console.log('Recipe created:', response.data);
        Navigate('/recipes');
    }catch(error){
        console.error('Create recipe failed:', error);  
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      title,
      description,
      ingredients,
      instructions,
      cookingTime,
      tags: tags.split(',').map(tag => tag.trim()),
      imageURL
    };
    console.log('Recipe Data:', recipeData);
    createRecipe(recipeData);   
  };

  return (
    <section id="recipeForm" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">Create Your Recipe</h2>
        <form id="recipe-creator-form" className="space-y-6 animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center" id="drop-zone">
                <input type="file" id="image-upload" accept="image/*" className="hidden" ref={imageUploadRef} onChange={handleImageUpload} />
                <div id="preview-container" className={imageURL ? 'mb-4' : 'hidden'}>
                  <img id="image-preview" className="mx-auto max-h-48 object-cover rounded-lg" src={imageURL} alt="Recipe Preview" ref={imagePreviewRef} />
                </div>
                <label htmlFor="image-upload" className="cursor-pointer">
                  <span className="mt-2 block text-sm text-gray-600">Drop an image or click to upload</span>
                </label>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Title</label>
              <input type="text" id="recipe-title" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea id="recipe-description" rows="3" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
              <div id="ingredients-container" className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <input type="text" className="ingredient-input w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} />
                    <button type="button" className="remove-ingredient text-red-500 px-2" onClick={() => handleRemoveIngredient(index)}>×</button>
                  </div>
                ))}
                <button type="button" className="text-emerald-500" onClick={handleAddIngredient}>Add Ingredient</button>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
              <div id="instructions-container" className="space-y-2">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2">
                    <input type="text" className="instruction-input w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={instruction} onChange={(e) => handleInstructionChange(index, e.target.value)} />
                    <button type="button" className="remove-instruction text-red-500 px-2" onClick={() => handleRemoveInstruction(index)}>×</button>
                  </div>
                ))}
                <button type="button" className="text-emerald-500" onClick={handleAddInstruction}>Add Instruction</button>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Time</label>
              <input placeholder='Enter cooking time in minutes' type="text" id="cooking-time" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
          
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <input type="text" id="recipe-tags" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>

            <div className="col-span-2">
              <button type="submit" className="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600" >Create Recipe</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateRecipe;