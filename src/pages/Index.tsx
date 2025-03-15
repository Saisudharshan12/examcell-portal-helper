
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div 
          className={`transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="mb-10 flex justify-center">
            <img 
              src="/lovable-uploads/d8282a8b-d67b-46e6-82c8-c8fe563c3ff9.png" 
              alt="Amrita School of Engineering" 
              className="h-20 object-contain animate-fade-in"
            />
          </div>

          <div className="text-center mb-12 space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome to Amrita School of Engineering, Chennai Campus
            </h1>
            <h2 className="text-xl text-gray-600">
              Exam Cell Portal
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div 
              className="flex flex-col items-center bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-all animate-scale-in hover-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="rounded-full bg-pink-50 p-4 mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-brand-magenta" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Faculty</h2>
              <p className="text-gray-600 text-center mb-4">
                Login for faculty members
              </p>
              <Link 
                to="/faculty-login" 
                className="w-full bg-brand-magenta hover:bg-brand-dark text-white py-2 px-4 rounded text-center transition-colors"
              >
                Login
              </Link>
            </div>

            <div 
              className="flex flex-col items-center bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-all animate-scale-in hover-scale"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="rounded-full bg-pink-50 p-4 mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-brand-magenta" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Administrator</h2>
              <p className="text-gray-600 text-center mb-4">
                Login for administrators
              </p>
              <Link 
                to="/admin-login" 
                className="w-full bg-brand-magenta hover:bg-brand-dark text-white py-2 px-4 rounded text-center transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-600 border-t">
        <p>© 2025 Exam Cell Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
