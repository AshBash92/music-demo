import { FC, useContext } from 'react';
import { ContextProvider } from './Context';
import HelloWorld from './Views/HelloWorld';
import HelloWorldTwo from './Views/HelloWorldTwo';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Link from '@mui/material/Link'
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld/>
  },
  {
    path: "/two",
    element: <HelloWorldTwo/>
  }
])

const App: FC = () => {
  return (
    <div>
      <h1 className="title-text">Music to my Ears</h1>
      <ContextProvider>
        <RouterProvider router={router} />
        <Link href="/two">Link</Link>
      </ContextProvider>
    </div>
  );
}

export default App;
