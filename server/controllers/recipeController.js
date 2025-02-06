import Recipe from '../models/Recipe.js';
import axios from 'axios';


// Get all recipes
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
};

export const getRecipesID = async(req,res) =>{
    try{
        const recipe= await Recipe.findById(req.params.id);
        res.status(200).json(recipe);
    }catch(error)
    {
        res.status(500).json({error:'Failed to fetch recipe'});
        console.log('Hellow i ma here');        
    }
}
    

export const getRecipesPersonal = async (req, res) => {
    try {
        console.log("Fetching personal recipes for user ID:", req.userId);
        const recipes = await Recipe.find({ userId:req.userId });

        if (!recipes.length) {
            return res.status(404).json({ error: 'No recipes found for this user.' });
        }

        res.status(200).json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ error: 'Failed to fetch recipe saddasda' });
    }   
};


// Create a new recipe
export const createRecipe = async (req, res) => {
    try {
        const userId = req.userId;
        const { title, description, ingredients, instructions, tags, cookingTime, imageURL } = req.body;

        // Input validation (add as needed)
        if (!title || !description || !ingredients || !instructions || !cookingTime) {
            return res.status(400).json({ error: 'Title, description, ingredients, instructions, and cooking time are required.' });
        }

        const recipe = new Recipe({userId, title, description, ingredients, instructions, tags, cookingTime, imageURL });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to create recipe' });
    }
};

// Update a recipe
export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, ingredients, instructions, tags, cookingTime, imageURL } = req.body;

        // Input validation (add as needed)
        if (!title && !description && !ingredients && !instructions && !cookingTime && !tags && !imageURL) {
            return res.status(400).json({ error: 'At least one field must be provided for update.' });
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            id,
            { title, description, ingredients, instructions, tags, cookingTime, imageURL },
            { new: true, runValidators: true } // Return the updated recipe and run validators
        );

        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.status(200).json(updatedRecipe);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to update recipe' });
    }
};

// Helper function to fetch recipes from Spoonacular
export const fetchRecipesFromSpoonacular = async (req, res) => {
    const { ingredients } = req.query;
    const apiKey = process.env.SPOON; // Ensure your API key is set in your environment variables
    
    if(!apiKey){
        console.error('API key not found');
        return res.status(500).json({ error: 'API key not found' });
    }

    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
          ingredients,
          number: 5,
          apiKey,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching recipes from Spoonacular:', error);
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  };
  
//   // Helper function to generate a recipe using GPT-4
// export const generateRecipeWithAI = async (ingredients) => {
//     try {
//       const prompt = `Generate a recipe using these ingredients: ${ingredients.join(', ')}. Include step-by-step instructions and measurements.`;
//       const completion = await openai.Completion.create({
//         model: 'text-davinci-003', // You can change the model to GPT-4 if needed
//         prompt: prompt,
//         max_tokens: 500,
//       });
//       return completion.choices[0].text.trim();
//     } catch (err) {
//       console.error('Error generating recipe with AI:', err);
//       return null;
//     }
//   };


// Delete a recipe
export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Recipe.findByIdAndDelete(id);

        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to delete recipe' });
    }
};