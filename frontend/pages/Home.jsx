import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Home() {
    return (
      <div>

    <NavBar />

    <Hero />

    <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                    Powerful Features for Recipe Management
                </h2>
                <p className="text-xl text-gray-600">Everything you need to organize your culinary creations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Recipe Creation</h3>
                    <p className="text-gray-600">Create and save recipes with our intuitive editor. Add ingredients, steps, and cooking times effortlessly.</p>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp2s">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Categories</h3>
                    <p className="text-gray-600">Organize recipes into custom categories. Find what you&apos;re looking for instantly.</p>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp4s">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Backup</h3>
                    <p className="text-gray-600">Never lose a recipe again with automatic cloud synchronization and backup.</p>
                </div>

                {/* <!-- Feature 4 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp6s">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopping Lists</h3>
                    <p className="text-gray-600">Generate shopping lists automatically from your selected recipes.</p>
                </div>

                {/* <!-- Feature 5 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp8s">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cooking Timer</h3>
                    <p className="text-gray-600">Built-in cooking timer to help you perfect your recipes every time.</p>
                </div>

                {/* <!-- Feature 6 --> */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Recipe Scaling</h3>
                    <p className="text-gray-600">Easily scale recipes up or down to match your serving needs.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="howItWorks" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                    How RecipeKeeper Works
                </h2>
                <p className="text-xl text-gray-400">Three simple steps to organize your recipes</p>
            </div>

            <div className="relative">
      
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-500 opacity-20"></div>

         
                <div className="relative mb-20 animate__animated animate__fadeInLeft">
                    <div className="md:flex items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full text-white font-bold text-xl">1</span>
                                    <h3 className="ml-4 text-xl font-semibold text-white">Create Your Account</h3>
                                </div>
                                <p className="text-gray-400">Sign up for free and get instant access to all features. No credit card required.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>

  
                <div className="relative mb-20 animate__animated animate__fadeInRight">
                    <div className="md:flex items-center">
                        <div className="md:w-1/2"></div>
                        <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 bg-emerald-500 rounded-full"></div>
                        <div className="md:w-1/2 md:pl-8">
                            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full text-white font-bold text-xl">2</span>
                                    <h3 className="ml-4 text-xl font-semibold text-white">Add Your Recipes</h3>
                                </div>
                                <p className="text-gray-400">Use our intuitive editor to input your recipes with ingredients, steps, and cooking times.</p>
                            </div>
                        </div>
                    </div>
                </div>

   
                <div className="relative animate__animated animate__fadeInLeft">
                    <div className="md:flex items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full text-white font-bold text-xl">3</span>
                                    <h3 className="ml-4 text-xl font-semibold text-white">Organize &amp; Access</h3>
                                </div>
                                <p className="text-gray-400">Categorize your recipes and access them anywhere, anytime from any device.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center animate__animated animate__fadeInUp">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:text-lg transition duration-300">
                    Start Organizing Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <section id="popularRecipes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                    Popular Recipes
                </h2>
                <p className="text-xl text-gray-600">Discover trending recipes from our community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="h-48 bg-neutral-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Vegetarian</span>
                            <span className="ml-2 text-sm text-gray-500">45 mins</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mediterranean Salad</h3>
                        <p className="text-gray-600 mb-4">Fresh vegetables with olive oil and feta cheese...</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="ml-1 text-gray-600">4.8</span>
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700 font-medium">View Recipe →</button>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="h-48 bg-neutral-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Italian</span>
                            <span className="ml-2 text-sm text-gray-500">30 mins</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Classic Margherita Pizza</h3>
                        <p className="text-gray-600 mb-4">Traditional pizza with fresh mozzarella and basil...</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="ml-1 text-gray-600">4.9</span>
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700 font-medium">View Recipe →</button>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="h-48 bg-neutral-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Asian</span>
                            <span className="ml-2 text-sm text-gray-500">25 mins</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Teriyaki Chicken Bowl</h3>
                        <p className="text-gray-600 mb-4">Grilled chicken with homemade teriyaki sauce...</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="ml-1 text-gray-600">4.7</span>
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700 font-medium">View Recipe →</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition duration-300 animate__animated animate__fadeInUp">
                    View All Recipes
                </button>
            </div>
        </div>
    </section>


    <section id="categories" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                    Recipe Categories
                </h2>
                <p className="text-xl text-gray-400">Browse recipes by category</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <!-- Breakfast --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Breakfast</h3>
                        <p className="text-gray-400 text-sm text-center">45 Recipes</p>
                    </div>
                </div>

                {/* <!-- Main Course --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Main Course</h3>
                        <p className="text-gray-400 text-sm text-center">78 Recipes</p>
                    </div>
                </div>

                {/* <!-- Desserts --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Desserts</h3>
                        <p className="text-gray-400 text-sm text-center">56 Recipes</p>
                    </div>
                </div>

                {/* <!-- Vegetarian --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Vegetarian</h3>
                        <p className="text-gray-400 text-sm text-center">34 Recipes</p>
                    </div>
                </div>

                {/* <!-- Quick & Easy --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Quick &amp; Easy</h3>
                        <p className="text-gray-400 text-sm text-center">67 Recipes</p>
                    </div>
                </div>

                {/* <!-- Healthy --> */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Healthy</h3>
                        <p className="text-gray-400 text-sm text-center">42 Recipes</p>
                    </div>
                </div>

   {/* Baking */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Baking</h3>
                        <p className="text-gray-400 text-sm text-center">31 Recipes</p>
                    </div>
                </div>

{/* Drinks */}
                <div className="group relative rounded-xl overflow-hidden animate__animated animate__fadeInUp">
                    <div className="bg-neutral-800 aspect-square p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Drinks</h3>
                        <p className="text-gray-400 text-sm text-center">23 Recipes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                    What Our Users Say
                </h2>
                <p className="text-xl text-gray-600">Join thousands of happy home chefs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-neutral-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">S</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                            <p className="text-gray-600">Home Chef</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <p className="text-gray-600">&quot;Finally, a recipe manager that actually makes sense! I love how easy it is to organize my family recipes and access them from anywhere.&quot;</p>
                </div>

                {/* <!-- Testimonial 2 --> */}
                <div className="bg-neutral-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">M</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900">Michael Chen</h4>
                            <p className="text-gray-600">Food Blogger</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <p className="text-gray-600">&quot;The categorization system is brilliant. I can quickly find and share recipes with my blog audience. A must-have for any food enthusiast!&quot;</p>
                </div>

                {/* <!-- Testimonial 3 --> */}
                <div className="bg-neutral-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">E</span>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900">Emma Davis</h4>
                            <p className="text-gray-600">Cooking Enthusiast</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <p className="text-gray-600">&quot;The recipe scaling feature is a game-changer! I can easily adjust serving sizes without doing the math myself. Love it!&quot;</p>
                </div>
            </div>
        </div>
    </section>


            
    <Footer/>
    
      </div>
    );
  }
  
  export default Home;