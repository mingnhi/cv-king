"use client";
import HomePage from '@/app/(client)/(home)/page';
import { createContext, useContext, useReducer, ReactNode } from 'react';
import JobDetailPage from './ui/client/user/JobDetailPage';
import JobsPage from '@/app/(client)/job/[slug]/page';
import CompanyDetailPage from '@/app/(client)/(company)/[slug]/page';
import DefaultPage from './ui/client/user/DefaultPage';
import EditProfile from './ui/client/user/EditProfile';
import JobSeekerDashboard from './ui/client/user/JobSeekerDashboard';
import { useRouter } from 'next/navigation';
interface User {
  id: string;
  name: string;
  email: string;
  userType: 'job-seeker' | 'employer';
  avatar?: string;
  company?: string;
}

interface AppState {
  currentPage: string;
  selectedJob?: any;
  selectedCompany?: any;
  selectedArticle?: any;
  user?: User;
  isLoggedIn: boolean;
  searchQuery?: string;
  filters?: any;
}

type AppAction =
  | { type: 'SET_PAGE'; payload: string }
  | { type: 'SET_JOB'; payload: any }
  | { type: 'SET_COMPANY'; payload: any }
  | { type: 'SET_ARTICLE'; payload: any }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTERS'; payload: any }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN'; payload: { user: User; redirectTo?: string } };

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigateTo: (page: string, data?: any) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    
    case 'SET_JOB':
      return { ...state, selectedJob: action.payload };
    
    case 'SET_COMPANY':
      return { ...state, selectedCompany: action.payload };
    
    case 'SET_ARTICLE':
      return { ...state, selectedArticle: action.payload };
    
    case 'SET_USER':
      return { ...state, user: action.payload, isLoggedIn: true };
    
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    
    case 'LOGIN':
      const targetPage = action.payload.user.userType === 'employer' 
        ? 'employer-dashboard' 
        : 'dashboard';
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        currentPage: action.payload.redirectTo || targetPage
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: undefined,
        isLoggedIn: false,
        currentPage: 'home'
      };
    
    default:
      return state;
  }
};
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

const AppContent = () => {
    const {state} = useApp();
 const renderPage = () => {
    switch (state.currentPage) {
      case 'home':
        return <HomePage />;
      case 'jobs':
        return <JobsPage />;
      case 'job-detail':
        return <JobDetailPage />;
      case 'companies':
        return <CompanyDetailPage />;
      case 'company-detail':
        return <DefaultPage />;
      case 'cv':
        return <DefaultPage/>;
      case 'post-job':
        return <DefaultPage />;
      case 'blog':
        return <DefaultPage />;
      case 'blog-detail':
        return <DefaultPage />;
      case 'login':
        return <DefaultPage />;
      case 'register':
        return <DefaultPage />;
      case 'dashboard':
        return <JobSeekerDashboard />;
      case 'employer-dashboard':
        return <DefaultPage />;
      case 'about':
        return <DefaultPage />;
      case 'contact':
        return <DefaultPage />;
      case 'terms':
        return <DefaultPage />;
      case 'privacy':
        return <DefaultPage />;
      case 'edit-profile':
        return <EditProfile />;
      default:
        return <HomePage />;
    }
  };

}
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, {
    currentPage: 'home',
    isLoggedIn: false,
  });
        const router = useRouter();

  const navigateTo = (path: string, data?: any) => {
    if (data?.job) {
      dispatch({ type: 'SET_JOB', payload: data.job });
    }
    if (data?.company) {
      dispatch({ type: 'SET_COMPANY', payload: data.company });
    }
    if (data?.article) {
      dispatch({ type: 'SET_ARTICLE', payload: data.article });
    }
    if (data?.search) {
      dispatch({ type: 'SET_SEARCH', payload: data.search });
    }
    if (data?.filters) {
      dispatch({ type: 'SET_FILTERS', payload: data.filters });
    }
    router.push(path);
    };

 
  const setUser = (user: User) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, navigateTo, setUser, logout }}>
      {children}
    </AppContext.Provider>
  );
};
