import Homepage from "../component/home/Homepage";
import LoginPage from "../component/login/LoginPage";
import RegisterPage from "../component/register/RegisterPage";

export const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "*",
        element: <div>Error Page</div>,
    },
];