import express from 'express';
import { getRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipesID , getRecipesPersonal, fetchRecipesFromSpoonacular } from '../controllers/recipeController.js';
import { verifyAccessToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/',getRecipes); // GET /api/recipes
router.get('/personal',verifyAccessToken,getRecipesPersonal);
router.get('/spoon',fetchRecipesFromSpoonacular); // GET /api/recipes/spoon // get /api/recipes/personal
router.get('/:id',getRecipesID); // GET /api/recipes/:id
router.put('/edit/:id', updateRecipe); // PUT /api/recipes/:id
router.post('/create',verifyAccessToken,createRecipe); // POST /api/recipes
router.delete('/:id', deleteRecipe); // DELETE /api/recipes/:id

export default router;