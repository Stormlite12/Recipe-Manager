import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../src/api";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: [""],
    instructions: [""],
    cookingTime: 0,
    tags: [],
    imageURL: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(formData);
    navigate("/");
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="block w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="block w-full p-2 border rounded"
      />

      {/* Ingredients */}
      <div>
        <h3 className="font-bold">Ingredients</h3>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) =>
              handleArrayChange("ingredients", index, e.target.value)
            }
            className="block w-full p-2 border rounded mb-2"
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayField("ingredients")}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          + Add Ingredient
        </button>
      </div>

      {/* Similar blocks for instructions, tags, etc. */}

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Recipe
      </button>
    </form>
  );
};

export default AddRecipe;
