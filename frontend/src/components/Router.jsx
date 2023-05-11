import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './SignUp';
import { LogIn } from './Pages/LogIn';
import FeedPage from './Pages/FeedPage';



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
            element: <FeedPage />,
            // loader: getTasks
        }
    ]
}])

export default Router;