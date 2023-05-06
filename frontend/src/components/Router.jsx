import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { Search } from './Search';
import UserFeed from './Pages/UserFeed';


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
            path:"/feed/",
            element: <UserFeed />,
            // loader: getTasks
        },
        {
            path:"/search/",
            element: <Search />,
        }
    ]
}])

export default Router;