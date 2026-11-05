<<<<<<< HEAD
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Loading from './components/Loading.jsx';
import Home from './pages/Home.jsx';
import Items from './pages/Items.jsx';
import QuestManager from './pages/QuestManager.jsx';

const About = lazy(() => import('./pages/About.jsx'));
const ItemDetails = lazy(() => import('./pages/ItemDetails.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading label="Loading page..." />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="items" element={<Items />} />
            <Route path="items/:id" element={<ItemDetails />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="quests" element={<QuestManager />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
=======
import {lazy,Suspense} from 'react';import {BrowserRouter,Route,Routes} from 'react-router-dom';import RootLayout from './components/RootLayout';import Loader from './components/Loader';
const Home=lazy(()=>import('./pages/Home'));const About=lazy(()=>import('./pages/About'));const Items=lazy(()=>import('./pages/Items'));const ItemDetails=lazy(()=>import('./pages/ItemDetails'));const Dashboard=lazy(()=>import('./pages/Dashboard'));const Login=lazy(()=>import('./pages/Login'));const NotFound=lazy(()=>import('./pages/NotFound'));
export default function App(){return <BrowserRouter><Suspense fallback={<Loader/>}><Routes><Route path="/" element={<RootLayout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="items" element={<Items/>}/><Route path="items/:id" element={<ItemDetails/>}/><Route path="dashboard" element={<Dashboard/>}/><Route path="login" element={<Login/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></Suspense></BrowserRouter>}
>>>>>>> 501ecf7d42a68514cf0a65e89d3f5da78d2781a9
