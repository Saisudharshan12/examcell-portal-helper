
import { useState } from 'react';
import { Eye, Download, MessageSquare } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface QuestionPaper {
  id: string;
  courseName: string;
  courseCode: string;
  facultyName: string;
  department: string;
  year: string;
  semester: string;
  examType: string;
  status: 'approved' | 'reviewed';
  submittedAt: string;
  approvedAt: string;
  moderatorReview?: string;
  adminReview?: string;
}

export const AdminPapersList = () => {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'reviewed' | 'not-reviewed'>('all');
  const [reviewOpen, setReviewOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<QuestionPaper | null>(null);
  const [review, setReview] = useState('');

  // Sample data - only approved papers
  const approvedPapers: QuestionPaper[] = [
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
      submittedAt: '2023-09-12',
      approvedAt: '2023-09-14',
      moderatorReview: 'Good coverage of syllabus. Approved.'
    },
    {
      id: 'QP006',
      courseName: 'Machine Learning',
      courseCode: 'CS401',
      facultyName: 'Dr. Suresh Kumar',
      department: 'Computer Science Engineering',
      year: '2023-2024',
      semester: '7th Semester',
      examType: 'Mid Term',
      status: 'approved',
      submittedAt: '2023-09-11',
      approvedAt: '2023-09-13'
    },
    {
      id: 'QP008',
      courseName: 'Digital Signal Processing',
      courseCode: 'EC302',
      facultyName: 'Dr. Meenakshi Iyer',
      department: 'Electronics and Communication Engineering',
      year: '2023-2024',
      semester: '5th Semester',
      examType: 'End Semester',
      status: 'reviewed',
      submittedAt: '2023-09-10',
      approvedAt: '2023-09-15',
      moderatorReview: 'Well-structured paper.',
      adminReview: 'Excellent paper. Meets all requirements.'
    }
  ];

  const filteredPapers = selectedFilter === 'all' 
    ? approvedPapers 
    : selectedFilter === 'reviewed' 
      ? approvedPapers.filter(paper => paper.adminReview) 
      : approvedPapers.filter(paper => !paper.adminReview);

  const handleReviewOpen = (paper: QuestionPaper) => {
    setSelectedPaper(paper);
    setReview(paper.adminReview || '');
    setReviewOpen(true);
  };

  const handleReviewSubmit = () => {
    if (selectedPaper && review.trim()) {
      toast({
        title: "Review Submitted",
        description: `Your review for ${selectedPaper.courseName} has been shared with faculty.`
      });
      setReviewOpen(false);
    } else {
      toast({
        title: "Error",
        description: "Please enter a review before submitting",
        variant: "destructive"
      });
    }
  };

  const handleDownload = (paperId: string) => {
    toast({
      title: "Download Started",
      description: `Question paper ${paperId} is downloading.`
    });
  };

  const getStatusBadge = (paper: QuestionPaper) => {
    if (paper.adminReview) {
      return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Reviewed</span>;
    } else {
      return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Pending Review</span>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Approved Question Papers</h2>
        <p className="text-sm text-gray-600">Review and provide feedback on approved question papers</p>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setSelectedFilter('all')} className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'all' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}>
          All Papers
        </button>
        <button onClick={() => setSelectedFilter('reviewed')} className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'reviewed' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}>
          Reviewed
        </button>
        <button onClick={() => setSelectedFilter('not-reviewed')} className={`px-3 py-1 text-sm rounded-md ${selectedFilter === 'not-reviewed' ? 'bg-brand-magenta text-white' : 'bg-gray-100 text-gray-700'}`}>
          Pending Review
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
            {filteredPapers.length > 0 ? filteredPapers.map(paper => (
              <TableRow key={paper.id}>
                <TableCell className="font-medium">{paper.id}</TableCell>
                <TableCell>{paper.courseName}</TableCell>
                <TableCell>{paper.courseCode}</TableCell>
                <TableCell>{paper.facultyName}</TableCell>
                <TableCell>{paper.department}</TableCell>
                <TableCell>{paper.semester}</TableCell>
                <TableCell>{getStatusBadge(paper)}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDownload(paper.id)}>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-600" onClick={() => handleReviewOpen(paper)}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                  No question papers found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Review Dialog */}
      {reviewOpen && selectedPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">Admin Review</h3>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setReviewOpen(false)}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Paper: {selectedPaper.courseName} ({selectedPaper.courseCode})</p>
                <p className="text-sm text-gray-500 mb-2">Faculty: {selectedPaper.facultyName}</p>
                
                {selectedPaper.moderatorReview && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm font-medium mb-1">Moderator Review:</p>
                    <p className="text-sm text-gray-700">{selectedPaper.moderatorReview}</p>
                  </div>
                )}
                
                <p className="text-sm font-medium mb-2">Your Review:</p>
                <Textarea 
                  value={review} 
                  onChange={(e) => setReview(e.target.value)} 
                  placeholder="Enter your review comments..." 
                  className="min-h-[150px]"
                />
                <p className="text-xs text-gray-500 mt-1">This review will be shared with both the course mentor and faculty moderator.</p>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setReviewOpen(false)}>Cancel</Button>
                <Button onClick={handleReviewSubmit}>Submit Review</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
