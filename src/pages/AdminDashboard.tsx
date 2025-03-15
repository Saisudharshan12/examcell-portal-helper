
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Users, FileText, Calendar, Settings, BarChart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { NotificationCard } from "@/components/dashboard/NotificationCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="ADMINISTRATOR DASHBOARD" showProfile variant="dashboard" />
      
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.05s" }}>
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Papers</p>
              <h3 className="text-2xl font-bold">248</h3>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.1s" }}>
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Faculty</p>
              <h3 className="text-2xl font-bold">56</h3>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-full bg-amber-100 p-3 mr-4">
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Upcoming Exams</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center animate-scale-in hover-scale" style={{ animationDelay: "0.2s" }}>
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
            <div className="bg-white border rounded-lg shadow-sm p-4 animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/admin/schedule" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="h-8 w-8 text-brand-magenta mb-2" />
                  <span className="text-sm text-center">Schedule Exams</span>
                </Link>
                <Link to="/admin/papers" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="h-8 w-8 text-brand-magenta mb-2" />
                  <span className="text-sm text-center">View Papers</span>
                </Link>
                <Link to="/admin/faculty" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="h-8 w-8 text-brand-magenta mb-2" />
                  <span className="text-sm text-center">Manage Faculty</span>
                </Link>
                <Link to="/admin/settings" className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings className="h-8 w-8 text-brand-magenta mb-2" />
                  <span className="text-sm text-center">Settings</span>
                </Link>
              </div>
            </div>
            
            <ActivityCard />
          </div>
          
          <div className="space-y-6">
            <NotificationCard />
            
            <div className="bg-white border rounded-lg shadow-sm p-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
      </main>
    </div>
  );
};

export default AdminDashboard;
