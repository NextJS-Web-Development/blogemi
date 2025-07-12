export interface BlogProps {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
}

export interface AddBlogValues { 
  title: string;
  author: string;
  content: string;
  tags: string[];
}