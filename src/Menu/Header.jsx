
const Header = () => {
  return (
    <header id="header" className="fixed top-10 w-full bg-gray-900 text-white z-40 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="https://github.com/4xmen" className="flex items-center space-x-2">
          <img src="https://i.postimg.cc/VvQy4WyS/4xmen-logo.png" alt="Logo" className="w-12 h-12" />
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="" className="hover:text-pink-500">Home</a>
          <div className="relative group">
            <button className="hover:text-pink-500">About</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
              <a href="blogs.html" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="blog.html" className="block px-4 py-2 hover:bg-gray-100">Certification</a>
              <a href="products.html" className="block px-4 py-2 hover:bg-gray-100">Sister Concern</a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-500">Service</button>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-500">Products</button>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-500">Contact</button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;