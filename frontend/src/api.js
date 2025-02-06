import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Recipes
export const fetchRecipes = () => API.get('/recipes');
export const createRecipe = (recipe) => API.post('/recipes', recipe);
export const fetchRecipe = (id) => API.get(`/recipes/${id}`);
export const updateRecipe = (id, recipe) => API.put(`/recipes/${id}`, recipe);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);