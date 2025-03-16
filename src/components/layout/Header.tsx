
import { useState, useRef, useEffect } from 'react';
import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title?: string;
  showProfile?: boolean;
  variant?: "default" | "dashboard";
}

export const Header = ({
  title = "Exam Cell Portal",
  showProfile = false,
  variant = "default"
}: HeaderProps) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    // In a real app, you would clear auth state here
    navigate('/');
  };

  return (
    <header className={`flex items-center ${variant === "dashboard" ? "justify-between bg-brand-magenta text-white px-6 py-3" : "justify-start bg-brand-magenta text-white p-4"}`}>
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-white/90">
          <span className="text-xl font-bold tracking-tight">{title}</span>
        </Link>
      </div>
      
      {showProfile && (
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2 transition-colors hover:text-white/90 focus:outline-none"
          >
            <Avatar className="h-8 w-8 border border-white/20">
              <AvatarFallback className="bg-white/10 text-white">FU</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">faculty1</span>
          </button>
          
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
