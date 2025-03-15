
import { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddFacultyFormProps {
  onClose: () => void;
}

export const AddFacultyForm = ({ onClose }: AddFacultyFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    courseName: '',
    courseCode: '',
    year: '',
    semester: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all required fields are filled
    const requiredFields = ['name', 'email', 'department', 'courseName', 'courseCode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in all required fields: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    // Submit form data
    toast({
      title: "Faculty Added",
      description: `${formData.name} has been added as a Faculty Moderator.`
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Add Faculty Moderator</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="name">Faculty Name <span className="text-red-500">*</span></Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter faculty name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
              <Input 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                placeholder="Enter department"
              />
            </div>
            <div>
              <Label htmlFor="courseName">Course Name <span className="text-red-500">*</span></Label>
              <Input 
                id="courseName" 
                name="courseName" 
                value={formData.courseName} 
                onChange={handleChange} 
                placeholder="Enter course name"
              />
            </div>
            <div>
              <Label htmlFor="courseCode">Course Code <span className="text-red-500">*</span></Label>
              <Input 
                id="courseCode" 
                name="courseCode" 
                value={formData.courseCode} 
                onChange={handleChange} 
                placeholder="Enter course code"
              />
            </div>
            <div>
              <Label htmlFor="year">Academic Year</Label>
              <Input 
                id="year" 
                name="year" 
                value={formData.year} 
                onChange={handleChange} 
                placeholder="e.g., 2023-2024"
              />
            </div>
            <div>
              <Label htmlFor="semester">Semester</Label>
              <Input 
                id="semester" 
                name="semester" 
                value={formData.semester} 
                onChange={handleChange} 
                placeholder="e.g., 3rd Semester"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Add Faculty</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
