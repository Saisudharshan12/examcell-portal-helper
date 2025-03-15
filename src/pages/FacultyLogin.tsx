
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";

const FacultyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      // Use the new credentials
      if (username === "exam_cell" && password === "exam12345") {
        toast({
          title: "Login successful",
          description: "Welcome to the Exam Cell Portal.",
        });
        navigate("/faculty-dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password. Please try again.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/e940d628-680d-49fd-9c3e-600410cbbfd8.png" 
              alt="Amrita School of Engineering" 
              className="h-16 object-contain"
            />
          </div>

          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-pink-50 p-4">
                <User className="h-6 w-6 text-brand-magenta" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-6">Faculty Login</h1>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-brand-magenta hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-magenta hover:bg-brand-dark text-white py-2 px-4 rounded transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link 
                to="/" 
                className="text-sm text-brand-magenta hover:underline inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyLogin;
