import {createRoot} from "react-dom/client";
import App from './components/app/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { LazyShop } from "@/pages/shop/Shop.lazy";
import { Profile } from "./pages/profile";
import { LazyProfile } from "./pages/profile/profile.lazy";
import ShopSkeleton from "./pages/shop/ShopSkeleton";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'} ><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<ShopSkeleton />}><LazyShop /></Suspense>
            },
            {
                path: '/profile',
                element: <Suspense fallback={'Loading...'} ><LazyProfile /></Suspense>
            },
        ]
    },
]);






container.render(
    <RouterProvider router={router} />
)
