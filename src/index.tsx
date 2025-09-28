import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { LazyHome } from "@/pages/home/Home.lazy";
import HomeSkeleton from "./pages/home/HomeSkeleton";
import { LazyServices } from "./pages/services/services.Lazy";
import ServicesSkeleton from './pages/services/ServicesSkeleton';
import WorkSkeleton from './pages/work/WorkSkeleton';
import { LazyWork } from './pages/work/Work.Lazy';
import { LazyProcess } from './pages/process/Process.Lazy';
import ProcessSkeleton from './pages/process/ProcessSkeleton';
import AboutSkeleton from './pages/about/AboutSkeleton';
import { LazyAbout } from './pages/about/About.Lazy';
import CareersSkeleton from './pages/careers/CareersSkeleton';
import { LazyCareers } from './pages/careers/Careers.Lazy';
import ContactSkeleton from './pages/contact/ContactSkeleton';
import { LazyContact } from './pages/contact/Contact.Lazy';

const root = document.getElementById('root');
if (!root) throw new Error('root not found');
const container = createRoot(root);

container.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={
                <Suspense fallback={<HomeSkeleton />}>
                <LazyHome />
                </Suspense>
            } />
            <Route path="services" element={
                <Suspense fallback={<ServicesSkeleton />}>
                <LazyServices />
                </Suspense>
            } />
            <Route path="work" element={
                <Suspense fallback={<WorkSkeleton />}>
                <LazyWork />
                </Suspense>
            } />
            <Route path="process" element={
                <Suspense fallback={<ProcessSkeleton />}>
                <LazyProcess />
                </Suspense>
            } />
            <Route path="about" element={
                <Suspense fallback={<AboutSkeleton />}>
                <LazyAbout />
                </Suspense>
            } />
            <Route path="careers" element={
                <Suspense fallback={<CareersSkeleton />}>
                <LazyCareers />
                </Suspense>
            } />
            <Route path="contact" element={
                <Suspense fallback={<ContactSkeleton />}>
                <LazyContact />
                </Suspense>
            } />
            <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
        </Routes>
    </HashRouter>

);










// import {createRoot} from "react-dom/client";
// import App from './components/app/App'
// import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
// import { Suspense } from "react";
// import { LazyHome} from "@/pages/home/Home.lazy";
// import HomeSkeleton from "./pages/home/HomeSkeleton";
// import { LazyServices } from "./pages/services/services.Lazy";
// const root = document.getElementById('root');

// if (!root) {
//     throw new Error('root not found');
// }

// const container = createRoot(root);

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 index: true,
//                 element: <Suspense fallback={<HomeSkeleton />}><LazyHome/></Suspense>
//             },
//             {
//                 path: '*',
//                 element: <Navigate to="/" replace />
//             },
//             {
//                 path: '/home',
//                 element: <Suspense fallback={<HomeSkeleton />}><LazyHome/></Suspense>
//             },
//             {
//                 path: '/services',
//                 element: <Suspense fallback={<HomeSkeleton />}><LazyServices/></Suspense>
//             },
            
//         ]
//     },
// ]);






// container.render(
//     <RouterProvider router={router} />
// )
