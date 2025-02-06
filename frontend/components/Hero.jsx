import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover &amp; Share Your
              <span className="text-emerald-500">Culinary Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Create, collect, and share your favorite recipes with a community
              of food enthusiasts. Turn your kitchen into a paradise of flavors.
            </p>
            <div className="flex flex-wrap gap-4">  
              <a
                href="/public"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold transition-colors duration-300 animate__animated animate__pulse animate__infinite"
              >
                Explore Recipes
              </a>
              <Link
                to="/CreateRecipe"
                className="px-8 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-full font-semibold transition-colors duration-300"
              >
                Start Creating
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-full h-96 bg-neutral-800 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🍳</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-neutral-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500">⭐</span>
                  <span className="font-semibold">4.9k+ Happy Cooks</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-neutral-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500">📖</span>
                  <span className="font-semibold">10k+ Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-10 animate__animated animate__fadeInUp">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-4 bg-neutral-800 rounded-lg">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="font-semibold">Easy Sharing</h3>
              <p className="text-sm text-gray-400">
                Share your recipes instantly
              </p>
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg">
              <div className="text-2xl mb-2">👨‍🍳</div>
              <h3 className="font-semibold">Expert Tips</h3>
              <p className="text-sm text-gray-400">Learn from the community</p>
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold">Save &amp; Organize</h3>
              <p className="text-sm text-gray-400">
                Keep your recipes organized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
