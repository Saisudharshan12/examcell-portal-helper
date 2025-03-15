
import { useState } from 'react';
import { Eye, Download, Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface QuestionPaper {
  id: string;
  courseName: string;
  courseCode: string;
  facultyName: string;
  department: string;
  year: string;
  semester: string;
  examType: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export const ModeratorView = () => {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<QuestionPaper | null>(null);

  // Sample data
  const questionPapers: QuestionPaper[] = [
    {
      id: 'QP001',
      courseName: 'Data Structures and Algorithms',
      courseCode: 'CS201',
      facultyName: 'Dr. Rajesh Kumar',
      department: 'Computer Science Engineering',
      year: '2023-2024',
      semester: '3rd Semester',
      examType: 'Mid Term',
      status: 'pending',
      submittedAt: '2023-09-15'
    },
    {
      id: 'QP002',
      courseName: 'Database Management Systems',
      courseCode: 'CS202',
      facultyName: 'Dr. Priya Singh',
      department: 'Computer Science Engineering',
      year: '2023-2024',
      semester: '3rd Semester',
      examType: 'End Semester',
      status: 'approved',
      submittedAt: '2023-09-12'
    },
    {
      id: 'QP003',
      courseName: 'Digital Electronics',
      courseCode: 'EC201',
      facultyName: 'Dr. Ramesh Nair',
      department: 'Electronics and Communication Engineering',
      year: '2023-2024',
      semester: '3rd Semester',
      examType: 'Mid Term',
      status: 'rejected',
      submittedAt: '2023-09-10'
    },
    {
      id: 'QP004',
      courseName: 'Operating Systems',
      courseCode: 'CS301',
      facultyName: 'Dr. Sanjay Mehta',
      department: 'Computer Science Engineering',
      year: '2023-2024',
      semester: '5th Semester',
      examType: 'Mid Term',
      status: 'pending',
      submittedAt: '2023-09-18'
    },
    {
      id: 'QP005',
      courseName: 'Computer Networks',
      courseCode: 'CS302',
      facultyName: 'Dr. Lakshmi Narayan',
      department: 'Computer Science Engineering',
      year: '2023-2024',
      semester: '5th Semester',
      examType: 'End Semester',
      status: 'pending',
      submittedAt: '2023-09-19'
    },
  ];

  const filteredPapers = selectedFilter === 'all' 
    ? questionPapers 
    : questionPapers.filter(paper => paper.status === selectedFilter);

  const handlePreview = (paper: QuestionPaper) => {
    setSelectedPaper(paper);
    setPreviewOpen(true);
  };

  const handleApprove = (paperId: string) => {
    toast({
      title: "Paper Approved",
      description: `Question paper ${paperId} has been approved successfully.`,
    });
  };

  const handleReject = (paperId: string) => {
    toast({
      title: "Paper Rejected",
      description: `Question paper ${paperId} has been rejected.`,
      variant: "destructive",
    });
  };

  const handleDownload = (paperId: string) => {
    toast({
      title: "Download Started",
      description: `Question paper ${paperId} is downloading.`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Approved</span>;
      case 'rejected':
        return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Rejected</span>;
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-red-500 rounded-lg shadow-sm p-4 animate-fade-in">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Question Papers Review</h2>
          <p className="text-sm text-gray-600">Review and moderate question papers submitted by course mentors</p>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'all' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            All Papers
          </button>
          <button
            onClick={() => setSelectedFilter('pending')}
            className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'pending' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Pending
          </button>
          <button
            onClick={() => setSelectedFilter('approved')}
            className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'approved' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Approved
          </button>
          <button
            onClick={() => setSelectedFilter('rejected')}
            className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'rejected' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Rejected
          </button>
        </div>

        <div className="border border-red-500 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paper ID</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Course Code</TableHead>
                <TableHead>Faculty Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPapers.length > 0 ? (
                filteredPapers.map((paper) => (
                  <TableRow key={paper.id}>
                    <TableCell className="font-medium">{paper.id}</TableCell>
                    <TableCell>{paper.courseName}</TableCell>
                    <TableCell>{paper.courseCode}</TableCell>
                    <TableCell>{paper.facultyName}</TableCell>
                    <TableCell>{paper.department}</TableCell>
                    <TableCell>{paper.semester}</TableCell>
                    <TableCell>{getStatusBadge(paper.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" onClick={() => handlePreview(paper)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDownload(paper.id)}>
                          <Download className="h-4 w-4" />
                        </Button>
                        {paper.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline" className="text-green-600" onClick={() => handleApprove(paper.id)}>
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600" onClick={() => handleReject(paper.id)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                    No question papers found matching your criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {previewOpen && selectedPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{selectedPaper.courseName}</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setPreviewOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Paper ID</p>
                  <p className="font-medium">{selectedPaper.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Course Code</p>
                  <p className="font-medium">{selectedPaper.courseCode}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Faculty Name</p>
                  <p className="font-medium">{selectedPaper.facultyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-medium">{selectedPaper.department}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Semester</p>
                  <p className="font-medium">{selectedPaper.semester}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Exam Type</p>
                  <p className="font-medium">{selectedPaper.examType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{getStatusBadge(selectedPaper.status)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Submitted At</p>
                  <p className="font-medium">{selectedPaper.submittedAt}</p>
                </div>
              </div>
              
              <div className="mt-6 border p-4 rounded-lg bg-gray-50 flex items-center justify-center h-96">
                <div className="text-center">
                  <p className="text-gray-500 mb-4">Question Paper Preview</p>
                  <p className="text-sm text-gray-400">This is a placeholder for the actual question paper content</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setPreviewOpen(false)}>Close</Button>
                <Button variant="outline" onClick={() => handleDownload(selectedPaper.id)}>
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
                {selectedPaper.status === 'pending' && (
                  <>
                    <Button variant="outline" className="text-green-600" onClick={() => handleApprove(selectedPaper.id)}>
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                    <Button variant="outline" className="text-red-600" onClick={() => handleReject(selectedPaper.id)}>
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
