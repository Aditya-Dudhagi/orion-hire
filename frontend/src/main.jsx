import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '@/components/layout';
import Login from '@/components/login'
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path='/FileInput' element={<Upload />} />
            </Route>

        </Routes>
    </BrowserRouter>
)
