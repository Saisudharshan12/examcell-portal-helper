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
  return <header className={`flex items-center ${variant === "dashboard" ? "justify-between bg-brand-magenta text-white px-6 py-3" : "justify-start bg-brand-magenta text-white p-4"}`}>
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-white/90">
          
          <span className="text-xl font-bold tracking-tight">{title}</span>
        </Link>
      </div>
      
      {showProfile && <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-sm font-medium transition-colors hover:text-white/90">
            Profile
          </Link>
        </div>}
    </header>;
};