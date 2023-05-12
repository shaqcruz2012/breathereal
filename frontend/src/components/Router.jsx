import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './SignUp';
import { LogIn } from './Pages/LogIn';
import FeedPage from './Pages/FeedPage';
import Profile from './Pages/Profile';



const Router = createHashRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <SignUp />
        },
        {
            path:"/login/",
            element: <LogIn />
        },
        {
            path:"/profile/",
            element: <Profile />
        },
        {
            path:"/feed/",
            element: <FeedPage />,
            // loader: getTasks
        }
    ]
}])

export default Router;