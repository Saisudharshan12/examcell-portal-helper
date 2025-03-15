
import { Clock, Calendar, AlertTriangle } from "lucide-react";

interface ActivityItem {
  id: number;
  title: string;
  code: string;
  type: string;
  due: string;
  status: "submitted" | "pending" | "overdue";
}

export const ActivityCard = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      title: "Data Structures (CS201)",
      code: "CS201",
      type: "Mid Term",
      due: "May 15, 2023",
      status: "submitted"
    },
    {
      id: 2,
      title: "Operating Systems (CS301)",
      code: "CS301",
      type: "End Semester",
      due: "May 20, 2023",
      status: "pending"
    },
    {
      id: 3,
      title: "Algorithms (CS202)",
      code: "CS202",
      type: "Mid Term",
      due: "May 10, 2023",
      status: "submitted"
    },
    {
      id: 4,
      title: "Computer Networks (CS401)",
      code: "CS401",
      type: "End Semester",
      due: "May 5, 2023",
      status: "overdue"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "submitted":
        return <span className="status-badge status-submitted">Submitted</span>;
      case "pending":
        return <span className="status-badge status-pending">Pending</span>;
      case "overdue":
        return <span className="status-badge status-overdue">Overdue</span>;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "border-l-status-submitted";
      case "pending":
        return "border-l-status-pending";
      case "overdue":
        return "border-l-status-overdue";
      default:
        return "border-l-gray-300";
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>
      
      <div className="divide-y">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className={`p-4 border-l-4 ${getStatusColor(activity.status)} hover:bg-gray-50 transition-colors`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{activity.title}</h3>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span className="flex items-center mr-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {activity.type}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Due: {activity.due}
                  </span>
                </div>
              </div>
              <div>
                {getStatusBadge(activity.status)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
