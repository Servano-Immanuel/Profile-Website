function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Immanuel Servano. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-400 transition-colors duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-400 transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 