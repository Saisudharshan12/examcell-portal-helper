
import { useState } from 'react';
import { Link } from "react-router-dom";
import { AlertTriangle, FileText, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { NotificationCard } from "@/components/dashboard/NotificationCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { QuestionPaperForm } from "@/components/dashboard/QuestionPaperForm";

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState<'submitted' | 'pending' | 'all'>('submitted');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="FACULTY DASHBOARD" showProfile variant="dashboard" />
      
      <div className="flex items-center space-x-2 px-6 py-2 bg-white border-b">
        <Link
          to="/faculty-dashboard?role=mentor"
          className="text-sm px-4 py-1 rounded-full bg-brand-magenta text-white"
        >
          Course Mentor
        </Link>
        <Link
          to="/faculty-dashboard?role=moderator"
          className="text-sm px-4 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Faculty Moderator
        </Link>
      </div>
      
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800">Admin Messages</h3>
              <p className="text-sm text-amber-700">
                All question papers must be submitted at least one week before the examination date.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center px-4 py-3 border-b">
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'submitted' ? 'bg-brand-magenta text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors mr-2`}
                  onClick={() => setActiveTab('submitted')}
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Submitted Papers
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'pending' ? 'bg-brand-magenta text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors mr-2`}
                  onClick={() => setActiveTab('pending')}
                >
                  <Clock className="h-4 w-4 mr-1" />
                  Pending Papers
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'all' ? 'bg-brand-magenta text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </button>
              </div>
            </div>
            
            <ActivityCard />
            
            <QuestionPaperForm />
          </div>
          
          <div className="space-y-6">
            <NotificationCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
