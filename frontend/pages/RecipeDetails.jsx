import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;
  if (!recipe) return <div>No recipe found</div>;

  return (
    <div>
    <NavBar/>
      <section id="recipeDetail" className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate__animated animate__fadeIn">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold">{recipe.title}</h1>
              {/* ...existing buttons... */}
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                ⏳ {recipe.cookingTime}
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                🍽️ {recipe.category}
              </span>
              {/* ...existing spans... */}
            </div>

            <div className="h-80 bg-neutral-200 rounded-lg mb-6">
              <img 
                src={recipe.imageURL} 
                alt={recipe.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-neutral-600">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Comments section remains the same */}
        </div>
      </section>
    </div>
  );
}

export default RecipeDetails;