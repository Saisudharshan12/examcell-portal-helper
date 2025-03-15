
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  time: string;
}

export const NotificationCard = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "End Semester Exams Schedule Released",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Question Paper Format Updated",
      time: "Yesterday"
    },
    {
      id: 3,
      title: "Mid-Term Question Papers Due",
      time: "2 days ago"
    }
  ]);

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>
      
      <div className="p-0">
        <ul className="divide-y">
          {notifications.map((notification, index) => (
            <li 
              key={notification.id}
              className="px-4 py-3 hover:bg-gray-50 transition-colors"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{notification.title}</span>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
