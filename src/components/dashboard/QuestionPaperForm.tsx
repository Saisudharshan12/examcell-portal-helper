
import { useState } from "react";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const QuestionPaperForm = () => {
  const { toast } = useToast();
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [examType, setExamType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      
      if (!file) {
        toast({
          title: "Error",
          description: "Please select a file to upload.",
          variant: "destructive",
        });
        return;
      }

      // Success toast
      toast({
        title: "Success",
        description: "Question paper uploaded successfully!",
      });

      // Reset form
      setCourseName("");
      setCourseCode("");
      setDepartment("");
      setSemester("");
      setExamType("");
      setFile(null);
      
      // Reset the file input
      const fileInput = document.getElementById("file-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }, 1500);
  };

  const departments = [
    "Computer Science Engineering",
    "Electronics and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ];

  const semesters = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester"
  ];

  const examTypes = [
    "Mid Term",
    "End Semester",
    "Internal Assessment",
    "Lab Exam",
    "Quiz"
  ];

  return (
    <div className="bg-white border border-red-500 rounded-lg shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsUploading(true);

        // Simulate upload delay
        setTimeout(() => {
          setIsUploading(false);
          
          if (!file) {
            toast({
              title: "Error",
              description: "Please select a file to upload.",
              variant: "destructive",
            });
            return;
          }

          // Success toast
          toast({
            title: "Success",
            description: "Question paper uploaded successfully!",
          });

          // Reset form
          setCourseName("");
          setCourseCode("");
          setDepartment("");
          setSemester("");
          setExamType("");
          setFile(null);
          
          // Reset the file input
          const fileInput = document.getElementById("file-upload") as HTMLInputElement;
          if (fileInput) fileInput.value = "";
        }, 1500);
      }} className="p-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="course-name" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Name of the Course
            </label>
            <input
              id="course-name"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              placeholder="e.g. Introduction to Computer Science"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="course-code" className="block text-sm font-medium text-gray-700 mb-1">
              Course Code
            </label>
            <input
              id="course-code"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              placeholder="e.g. 19CSE123"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta appearance-none"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="" disabled>Select department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
              Semester
            </label>
            <select
              id="semester"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta appearance-none"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="" disabled>Select semester</option>
              {semesters.map((sem) => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="exam-type" className="block text-sm font-medium text-gray-700 mb-1">
              Exam Type
            </label>
            <select
              id="exam-type"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta appearance-none"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              required
            >
              <option value="" disabled>Choose exam type</option>
              {examTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Question Paper
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">
                  {file ? file.name : "No file selected"}
                </p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="text-sm text-brand-magenta border border-brand-magenta rounded-md px-3 py-1 hover:bg-pink-50 transition-colors"
                >
                  Browse Files
                </button>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-brand-magenta hover:bg-brand-dark text-white py-2 px-4 rounded transition-colors"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Submit Question Paper"}
          </button>
        </div>
      </form>
    </div>
  );
};
