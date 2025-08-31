"use-client";
import { useState } from 'react';
import { 
  User, 
  FileText, 
  Bookmark, 
  Send, 
  Settings, 
  Download,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Menu,
  X,
  ArrowLeft,
  Plus,
  Search,
  Bell,
  Share2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../common/card';
import { Badge } from '../../common/badge';
import { Separator } from '../../common/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../../common/avatar';
import { Progress } from '../../common/progress';
import { Button } from '../../common/button';  
import { useApp } from '@/components/AppContext';
const JobSeekerDashboard = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'cv', label: 'My CV', icon: FileText },
    { id: 'saved', label: 'Saved Jobs', icon: Bookmark },
    { id: 'applications', label: 'My Applications', icon: Send },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const mockApplications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp Vietnam',
      location: 'Ho Chi Minh City',
      salary: '$2000 - $3000',
      appliedDate: '2024-01-15',
      status: 'interview',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face',
      description: 'Exciting opportunity to work with cutting-edge technologies...',
      interviewDate: '2024-01-25 14:00',
      notes: 'Technical interview scheduled with the development team'
    },
    {
      id: 2,
      jobTitle: 'React Developer',
      company: 'StartupXYZ',
      location: 'Hanoi',
      salary: '$1500 - $2500',
      appliedDate: '2024-01-10',
      status: 'pending',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=64&h=64&fit=crop&crop=face',
      description: 'Join our fast-growing startup and make an impact...',
      notes: 'Application under review by HR team'
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'DevStudio',
      location: 'Da Nang',
      salary: '$1800 - $2800',
      appliedDate: '2024-01-05',
      status: 'rejected',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=64&h=64&fit=crop&crop=face',
      description: 'Work on exciting projects with modern technology stack...',
      notes: 'Thank you for your interest. Unfortunately, we have moved forward with other candidates.'
    }
  ];

  const mockSavedJobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      location: 'Ho Chi Minh City',
      salary: '$1200 - $2000',
      postedDate: '2024-01-20',
      tags: ['UI/UX', 'Figma', 'Adobe XD'],
      description: 'Creative design role focusing on user experience...',
      urgent: false
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'DataTech',
      location: 'Hanoi',
      salary: '$2000 - $3500',
      postedDate: '2024-01-18',
      tags: ['Node.js', 'MongoDB', 'AWS'],
      description: 'Backend development for scalable applications...',
      urgent: true
    }
  ];

  const handleCreateCV = () => {
    navigateTo('cv');
  };

  const handleApplyToJob = (job: any) => {
    // Create a mock job object and navigate to job detail
    const jobDetail = {
      id: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      description: job.description,
      tags: job.tags,
      posted: job.postedDate,
      type: 'Full-time',
      experience: '2-5 years'
    };
    navigateTo('job-detail', { job: jobDetail });
  };

  const handleViewJob = (application: any) => {
    const jobDetail = {
      id: application.id,
      title: application.jobTitle,
      company: application.company,
      location: application.location,
      salary: application.salary,
      description: application.description,
      posted: application.appliedDate,
      type: 'Full-time',
      experience: '2-5 years'
    };
    navigateTo('job-detail', { job: jobDetail });
  };

  const handleRemoveSavedJob = (jobId: number) => {
    alert('Job removed from saved list');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'interview':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800"><Calendar className="w-3 h-3 mr-1" />Interview</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      case 'accepted':
        return <Badge variant="secondary" className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Accepted</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1>My Profile</h1>
              <Button onClick={() => navigateTo('edit-profile')} className="bg-primary hover:bg-primary/90">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" />
                    <AvatarFallback>NV</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2>Nguyen Van A</h2>
                    <p className="text-gray-600">Senior Frontend Developer</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      Ho Chi Minh City, Vietnam
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Expected salary: $2000 - $3000
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export CV
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Email:</span> 
                        <button className="text-primary hover:underline ml-1">nguyen.van.a@email.com</button>
                      </p>
                      <p><span className="font-medium">Phone:</span> 
                        <button className="text-primary hover:underline ml-1">+84 123 456 789</button>
                      </p>
                      <p><span className="font-medium">LinkedIn:</span> 
                        <button className="text-primary hover:underline ml-1">linkedin.com/in/nguyenvana</button>
                      </p>
                      <p><span className="font-medium">GitHub:</span> 
                        <button className="text-primary hover:underline ml-1">github.com/nguyenvana</button>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="mb-3">Profile Completion</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile completeness</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-sm text-gray-600">
                      Add more experience and education to improve your profile visibility.
                      <button className="text-primary hover:underline ml-1">Complete now</button>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab('applications')}>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-600">Applications Sent</div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab('saved')}>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">Saved Jobs</div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-sm text-gray-600">Profile Views</div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'cv':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1>My CV</h1>
              <Button onClick={handleCreateCV} className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Create New CV
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Frontend Developer CV</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Last updated: January 20, 2024</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleCreateCV}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Full Stack Developer CV</span>
                    <Badge variant="secondary">Draft</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Last updated: January 15, 2024</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCreateCV}>
                      <Edit className="w-4 h-4 mr-2" />
                      Continue Editing
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>CV Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Choose from our professional CV templates to create a standout resume.</p>
                <Button variant="outline" onClick={handleCreateCV}>
                  Browse Templates
                </Button>
              </CardContent>
            </Card>

            {/* CV Tips */}
            <Card>
              <CardHeader>
                <CardTitle>CV Tips & Tricks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Essential Sections</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Professional summary</li>
                      <li>• Work experience</li>
                      <li>• Skills and competencies</li>
                      <li>• Education background</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Best Practices</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keep it concise (1-2 pages)</li>
                      <li>• Use action verbs</li>
                      <li>• Quantify achievements</li>
                      <li>• Proofread carefully</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => navigateTo('blog')}>
                    Read More CV Tips
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'saved':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1>Saved Jobs ({mockSavedJobs.length})</h1>
              <Button variant="outline" onClick={() => navigateTo('jobs')}>
                <Search className="w-4 h-4 mr-2" />
                Browse More Jobs
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockSavedJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="cursor-pointer hover:text-primary" onClick={() => handleApplyToJob(job)}>
                            {job.title}
                          </h3>
                          {job.urgent && <Badge className="bg-red-100 text-red-700">URGENT</Badge>}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 space-x-4 mb-3">
                          <div className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            {job.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.postedDate}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button size="sm" onClick={() => handleApplyToJob(job)} className="bg-primary hover:bg-primary/90">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleRemoveSavedJob(job.id)}>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {mockSavedJobs.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="mb-2">No saved jobs yet</h3>
                  <p className="text-gray-600 mb-4">
                    Start saving jobs you're interested in to keep track of opportunities.
                  </p>
                  <Button variant="outline" onClick={() => navigateTo('jobs')}>
                    Browse Jobs
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1>My Applications ({mockApplications.length})</h1>
              <Button variant="outline" onClick={() => navigateTo('jobs')}>
                <Search className="w-4 h-4 mr-2" />
                Find More Jobs
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-600">Total Applications</div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">5</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Interview</div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <div className="text-sm text-gray-600">Accepted</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              {mockApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={application.logo} />
                        <AvatarFallback>{application.company.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="mb-1 cursor-pointer hover:text-primary" onClick={() => handleViewJob(application)}>
                              {application.jobTitle}
                            </h3>
                            <p className="text-gray-600">{application.company}</p>
                          </div>
                          {getStatusBadge(application.status)}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {application.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {application.salary}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Applied: {application.appliedDate}
                          </div>
                        </div>
                        {application.notes && (
                          <div className="bg-gray-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-600">{application.notes}</p>
                            {application.interviewDate && (
                              <p className="text-sm font-medium text-blue-600 mt-1">
                                Interview: {application.interviewDate}
                              </p>
                            )}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleViewJob(application)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          {application.status === 'interview' && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Calendar className="w-4 h-4 mr-2" />
                              View Interview Info
                            </Button>
                          )}
                          {application.status === 'pending' && (
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Update Application
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h1>Settings</h1>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <p className="text-sm text-gray-600">nguyen.van.a@email.com</p>
                    <Button variant="outline" size="sm" className="mt-2">Change Email</Button>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <p className="text-sm text-gray-600">••••••••</p>
                    <Button variant="outline" size="sm" className="mt-2">Change Password</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Job Recommendations</p>
                      <p className="text-sm text-gray-600">Receive personalized job suggestions</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Application Updates</p>
                      <p className="text-sm text-gray-600">Get notified about application status changes</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Interview Reminders</p>
                      <p className="text-sm text-gray-600">Receive reminders for upcoming interviews</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-gray-600">Control who can see your profile</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Export</p>
                      <p className="text-sm text-gray-600">Download a copy of your data</p>
                    </div>
                    <Button variant="outline" size="sm">Export</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-gray-600">Permanently delete your account and data</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo('home')}
              className="mr-2"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2>Dashboard</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <nav className="mt-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
                  activeTab === item.id ? 'bg-orange-50 text-primary border-r-2 border-primary' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Main content */}
      <div className="lg:ml-64">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1>Dashboard</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateTo('home')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
export default JobSeekerDashboard;
