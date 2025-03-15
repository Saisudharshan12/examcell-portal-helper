
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Users, FileText, Calendar, Settings, BarChart, UserPlus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { NotificationCard } from "@/components/dashboard/NotificationCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { AdminPapersList } from "@/components/dashboard/AdminPapersList";
import { Button } from "@/components/ui/button";
import { AddFacultyForm } from "@/components/dashboard/AddFacultyForm";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'papers' | 'faculty'>('dashboard');
  const [showAddFacultyForm, setShowAddFacultyForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="ADMINISTRATOR DASHBOARD" showProfile variant="dashboard" />
      
      <div className="flex items-center space-x-2 px-6 py-2 bg-white border-b">
        <button 
          onClick={() => setActiveTab('dashboard')} 
          className={`text-sm px-4 py-1 rounded-full ${activeTab === 'dashboard' ? 'bg-brand-magenta text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors'}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => setActiveTab('papers')} 
          className={`text-sm px-4 py-1 rounded-full ${activeTab === 'papers' ? 'bg-brand-magenta text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors'}`}
        >
          Question Papers
        </button>
        <button 
          onClick={() => setActiveTab('faculty')} 
          className={`text-sm px-4 py-1 rounded-full ${activeTab === 'faculty' ? 'bg-brand-magenta text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors'}`}
        >
          Faculty Management
        </button>
      </div>
      
      <main className="flex-1 container mx-auto py-6 px-4">
        {activeTab === 'dashboard' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.05s" }}>
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Papers</p>
                  <h3 className="text-2xl font-bold">248</h3>
                </div>
              </div>
              
              <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.1s" }}>
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Faculty</p>
                  <h3 className="text-2xl font-bold">56</h3>
                </div>
              </div>
              
              <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.15s" }}>
                <div className="rounded-full bg-amber-100 p-3 mr-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Upcoming Exams</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </div>
              
              <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.2s" }}>
                <div className="rounded-full bg-purple-100 p-3 mr-4">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Departments</p>
                  <h3 className="text-2xl font-bold">8</h3>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                  <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors h-auto" onClick={() => { setActiveTab('papers') }}>
                      <Calendar className="h-8 w-8 text-brand-magenta mb-2" />
                      <span className="text-sm text-center">Schedule Exams</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors h-auto" onClick={() => { setActiveTab('papers') }}>
                      <FileText className="h-8 w-8 text-brand-magenta mb-2" />
                      <span className="text-sm text-center">View Papers</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors h-auto" onClick={() => { setActiveTab('faculty') }}>
                      <Users className="h-8 w-8 text-brand-magenta mb-2" />
                      <span className="text-sm text-center">Manage Faculty</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors h-auto">
                      <Settings className="h-8 w-8 text-brand-magenta mb-2" />
                      <span className="text-sm text-center">Settings</span>
                    </Button>
                  </div>
                </div>
                
                <ActivityCard />
              </div>
              
              <div className="space-y-6">
                <NotificationCard />
                
                <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
                  <div className="space-y-3">
                    <div className="border-l-4 border-brand-magenta pl-3 py-1">
                      <p className="font-medium">Mid-Term Exams</p>
                      <p className="text-sm text-gray-500">May 15 - May 20, 2023</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-3 py-1">
                      <p className="font-medium">End Semester Exams</p>
                      <p className="text-sm text-gray-500">June 10 - June 25, 2023</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-3 py-1">
                      <p className="font-medium">Lab Practical Exams</p>
                      <p className="text-sm text-gray-500">May 25 - May 30, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'papers' && (
          <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4">
            <AdminPapersList />
          </div>
        )}

        {activeTab === 'faculty' && (
          <div className="space-y-6">
            <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Faculty Management</h2>
                <Button onClick={() => setShowAddFacultyForm(true)}>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Faculty Moderator
                </Button>
              </div>
              <div className="border border-red-500 rounded-lg p-4">
                <p className="text-gray-500 text-center py-8">Faculty list will appear here</p>
              </div>
            </div>
          </div>
        )}

        {showAddFacultyForm && <AddFacultyForm onClose={() => setShowAddFacultyForm(false)} />}
      </main>
    </div>
  );
};

export default AdminDashboard;
