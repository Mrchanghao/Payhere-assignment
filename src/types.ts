export interface Repos {
  incomplete_results: boolean;
  items: Repo[];
  total_count: number;
}

export interface Repo {
  id: number;
  node_id: string;
  has_issues: boolean;
  issues_url: string;
  language: string;
  languages_url: string;
  name: string;
  open_issues: number;
  open_issues_count: number;
  watchers: number;
  watchers_count: number;
  owner: Owner;
  description: string;
  stargazers_count: number // 스타 갯수
}

export interface Owner {
  avatar_url: string; 
  events_url: string;

  followers_url: string;
  following_url: string;

  gists_url: string;

  gravatar_id: string;

  html_url: string; 
  id: number; 
  login: string; // owner 이름?  
  node_id: string; 

  organizations_url: string; 

  received_events_url: string;
  repos_url: string; 

  site_admin: boolean; 
  starred_url: string;
  subscriptions_url: string;
  type: string;

  url: string;
}

export interface CustomRepo {
  
  registeredRepo: {
    id: number;
    name: string;
    owner: string;
  }[]
}

export interface User {
  avatar_url: string;
  followers_url: string;
  following_url: string;
  id: number;
  repos_url: string;
}

export interface Issue  {
  number: number;
  html_url: string; // 주소;
  created_at: Date;
  comments: number;
  id: number;
  comments_url: string;
  repository_url: string;
  state: 'open' | 'closed';
  user: User;
  author_association: string;
  body: string;
  title: string;
  url: string;
}

export type Issues = Issue[];

