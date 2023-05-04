import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { Task } from './Tasks';
import { getTasks } from './utilities';
import { Search } from './Search';

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
            path:"/tasks/",
            element: <Task />,
            loader: getTasks
        },
        {
            path:"/search/",
            element: <Search />,
            loader: getTasks
        }
    ]
}])

export default Router;