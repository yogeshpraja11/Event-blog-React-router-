import {createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Events,{loader as eventLoader} from './Pages/Events';
import {RouterProvider} from 'react-router-dom';
import EventDetail,{loader as eventDetailLoader,action as deleteEventAction} from './Pages/EventDetail';
import NewEvent,{action as newEventAction} from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import Error from './Pages/Error';

const router=createBrowserRouter([
  {path:'/',
  element:<RootLayout/>,                         //we are rendering RootLayout in everynested paths
  errorElement:<Error/>,               //this gets rendered whenever an error occures in route or loader function
  children:[                                    // children are nested inside of root path
    {index:true,element:<Home/>},
    {path:'events',element:<EventsRootLayout/>,
    children:[
      {index:true,
      element:<Events/>,
      loader:eventLoader,            // loader is an function which executes when ever page gets loaded
      },
      {path:':eventId',
       id:'event-detail',
      loader:eventDetailLoader,
       children:[
        {index:true,
        element:<EventDetail/>,
        action:deleteEventAction},
        {path:'edit',element:<EditEvent/>},
       ]},
      {path:'new',element:<NewEvent/>,action:newEventAction,},
      
    ]},
  ]
}
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
