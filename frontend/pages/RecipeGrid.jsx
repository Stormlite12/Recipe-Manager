import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RecipeGrid() {
  const [recipes, setRecipes] = useState([]);
  const [showPersonal, setShowPersonal] = useState(false); // Toggle personal/public recipes
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(""); // Add error state
  const navigate = useNavigate();

  const convertSpoonacularRecipes = (spoonacularData) => {
    console.log('Spoonacular Data:', spoonacularData); // Log the data to inspect its structure
    
    if(!Array.isArray(spoonacularData)) {
      console.error('Invalid spoonacular data:', spoonacularData);
      return [];
    }
    
    return spoonacularData.map((recipe, index) => {
      console.log(`Recipe ${index}:`, recipe); // Log each recipe to inspect its structure

      return {
        _id: recipe.id, // Use `id` as `_id`
        title: recipe.title,
        description: "No description available", // Default description
        ingredients: [], // Default empty ingredients
        instructions: [], // Default empty instructions
        cookingTime: "Unknown", // Default cooking time
        tags: [], // Default empty tags
        imageURL: recipe.image,
      };
    });
  };

  // Fetch recipes when `showPersonal` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = showPersonal
          ? `${import.meta.env.VITE_API_URL}/recipes/personal`
          : `${import.meta.env.VITE_API_URL}/recipes`;
        const response = await axios.get(endpoint, { withCredentials: true });
        setRecipes(response.data);
      } catch (error) {
        console.error("Can't get recipes", error);
      }
    };

    fetchData();
  }, [showPersonal]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/recipes/spoon`, {
        params: {
          ingredients: searchQuery,
        },
      });
      console.log(response.data); // Log the fetched recipes to the console
      const convertedRecipes = convertSpoonacularRecipes(response.data); // Convert the fetched recipes
      navigate('/SearchResults', { state: { recipes: convertedRecipes } }); // Navigate to the new page and pass the data
      setError(''); // Clear any previous error
    } catch (err) {
      setError('Failed to fetch recipes');
      console.error('Error fetching recipes:', err);
    }
  };

  // Toggle button handler
  const handleToggle = (type) => {
    setShowPersonal(type === "personal");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Delete a recipe
  const handleDelete = async (recipeId, event) => {
    event.stopPropagation(); // Prevents card click navigation
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/recipes/${recipeId}`, {
        withCredentials: true,
      });
      setRecipes((prevRecipes) => prevRecipes.filter((r) => r._id !== recipeId)); // Remove deleted recipe from UI
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <section id="recipeGrid" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-4">
              <button
                onClick={() => handleToggle("personal")}
                className={`px-6 py-2 rounded-full font-medium ${
                  showPersonal
                    ? "bg-emerald-500 text-white"
                    : "bg-neutral-200 text-neutral-700"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => handleToggle("public")}
                className={`px-6 py-2 rounded-full font-medium ${
                  !showPersonal
                    ? "bg-emerald-500 text-white"
                    : "bg-neutral-200 text-neutral-700"
                }`}
              >
                Public
              </button>
              <Link
                to="/CreateRecipe"
                className="px-6 py-2 rounded-full font-medium bg-neutral-200 text-neutral-700"
              >
                Start Creating
              </Link>
            </div>
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search recipes by ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full px-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:border-emerald-500"
                />
                <span className="absolute right-3 top-2.5">🔍</span>
              </div>
            </div>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/recipes/${recipe._id}`)} // Navigate to details page
              >
                <div className="h-auto">
                  <img
                    src={recipe.imageURL}
                    alt={recipe.title || "Recipe image"}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      console.log("Image failed to load:", recipe.imageURL);
                      e.target.onerror = null;
                      e.target.src = "/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{recipe.title}</h3>
                    <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                      {recipe.cookingTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {recipe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-neutral-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm ml-1">4.5</span>
                    </div>
                    <div className="flex gap-2">
                      {showPersonal && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents navigation when clicking edit
                            navigate(`/recipes/edit/${recipe._id}`);
                          }}
                          className="p-2 text-neutral-600 hover:text-emerald-500"
                        >
                          📝
                        </button>
                      )}
                      {showPersonal && (
                        <button
                          onClick={(e) => handleDelete(recipe._id, e)} // Delete handler
                          className="p-2 text-neutral-600 hover:text-red-500"
                        >
                          🗑️
                        </button>
                      )}
                      <button className="p-2 text-neutral-600 hover:text-red-500">
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            <button className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300">
              3
            </button>
            <button className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecipeGrid;