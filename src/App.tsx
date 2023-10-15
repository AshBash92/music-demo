import React, { useState } from 'react';
import Context from './context';
import HelloWorld from './Views/HelloWorld';
import HelloWorldTwo from './Views/HelloWorldTwo';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Link from '@mui/material/Link'

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

const App: React.FC = () => {
  const [context, setContext] = useState({
    apiKey: "Hello World"
  });

  return (
    <Context.Provider value={{ context, setContext }}>
      <RouterProvider router={router} />
      <Link href="/two">Link</Link>
    </Context.Provider>
  );
}

export default App;
