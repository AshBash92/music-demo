import { FC, useState, useEffect } from 'react';
import Context from './Context';
import HelloWorld from './Views/HelloWorld';
import HelloWorldTwo from './Views/HelloWorldTwo';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Link from '@mui/material/Link'
import './App.css';
import { ContextDataType } from './types';

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

  const [context, setContext] = useState<ContextDataType>({
    client_id: "abab7da00b4e4f12853c6732d72612c1",
    client_secret: "1a3b63e4dd5749dd89f1afab33fcc342",
    access_token: null
  });

  return (
    <div>
      <h1 className="title-text">Music App Title</h1>
      <Context.Provider value={{context, setContext}}>
        <RouterProvider router={router} />
        <Link href="/two">Link</Link>
      </Context.Provider>
    </div>
  );

}

export default App;
