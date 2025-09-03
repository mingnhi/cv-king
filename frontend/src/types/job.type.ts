export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  posted: string;
  postedDate: Date;
  tags: string[];
  description: string;
  urgent: boolean;
  featured: boolean;
}
