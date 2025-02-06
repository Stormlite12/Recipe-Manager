import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddRecipe from '../components/AddRecipe.jsx'
import Home from '../pages/Home.jsx'
import AuthPage from '../pages/Authpage.jsx'
import RecipeGrid from '../pages/RecipeGrid.jsx'
import RecipeDetails from '../pages/RecipeDetails.jsx'
import CreateRecipe from '../pages/CreateRecipe.jsx'
import ProtectedRoute from '../middleware/withAuth.jsx'
import EditRecipe from '../pages/EditRecipe.jsx'
import PublicRecipes from '../pages/PublicRecipes.jsx'
import SearchResults from '../pages/SearchResults.jsx'

function App() {


  return (
   <Router>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/recipes' element={<RecipeGrid/>}/>
          <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>
          <Route path='/recipes/edit/:id' element={<EditRecipe />}/>
        </Route>
        <Route path='/public' element={<PublicRecipes/>}/>
        <Route path='/login' element={<AuthPage/>}/>
        <Route path='/add' element={<AddRecipe />}/>
        <Route path='/SearchResults' element={<SearchResults/>}/>
      
      </Routes>
   </Router>
  )
}

export default App
