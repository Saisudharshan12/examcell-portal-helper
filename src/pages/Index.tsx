
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleFacultyLogin = () => {
    navigate("/faculty-login");
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className={`transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-10 flex justify-center">
            <img src="/lovable-uploads/e940d628-680d-49fd-9c3e-600410cbbfd8.png" alt="Amrita School of Engineering" className="h-60 animate-fade-in object-scale-down" />
          </div>

          <div className="text-center mb-12 space-y-2 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome to Amrita School of Engineering, Chennai Campus
            </h1>
            <h2 className="text-xl text-gray-600">
              Exam Cell Portal
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 max-w-3xl mx-auto">
            <div 
              className="flex flex-col items-center justify-center w-56 h-56 rounded-full border-2 border-red-500 bg-white p-8 shadow-sm hover:shadow-lg transition-all animate-scale-in hover:scale-110 cursor-pointer" 
              style={{ animationDelay: "0.2s" }}
              onClick={handleFacultyLogin}
            >
              <div className="rounded-full bg-pink-50 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Faculty</h2>
            </div>

            <div 
              className="flex flex-col items-center justify-center w-56 h-56 rounded-full border-2 border-red-500 bg-white p-8 shadow-sm hover:shadow-lg transition-all animate-scale-in hover:scale-110 cursor-pointer" 
              style={{ animationDelay: "0.3s" }}
              onClick={handleAdminLogin}
            >
              <div className="rounded-full bg-pink-50 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Administrator</h2>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-600 border-t">
        <p>© 2025 Exam Cell Portal. All rights reserved.</p>
      </footer>
    </div>;
};

export default Index;
