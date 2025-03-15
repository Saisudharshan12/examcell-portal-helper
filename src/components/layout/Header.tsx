
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <header className={`flex items-center ${variant === "dashboard" ? "justify-between bg-brand-magenta text-white px-6 py-3" : "justify-start bg-brand-magenta text-white p-4"}`}>
      <div className="flex items-center space-x-2">
        <GraduationCap className="h-6 w-6" />
        <Link to="/" className="text-xl font-bold tracking-tight transition-colors hover:text-white/90">
          {title}
        </Link>
      </div>
      
      {showProfile && (
        <div className="flex items-center space-x-4">
          <Link 
            to="/profile" 
            className="text-sm font-medium transition-colors hover:text-white/90"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
};
