import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

function SearchResults() {
  const location = useLocation();
  const { recipes } = location.state || { recipes: [] };

  return (
    <div>
      <NavBar />
      <section id="searchResults" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Search Results</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchResults;