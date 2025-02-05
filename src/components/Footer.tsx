import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link to="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link></li>
              <li><Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};