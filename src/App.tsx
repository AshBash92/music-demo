import { FC, useContext } from 'react';
import Context from './context';
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

  const {context, setContext} = useContext(Context);

  setContext((context) => {
    return {
        ...context,
        access_token: response.access_token
    }
  })

  return (
    <div>
      <h1 className="title-text">Music to my Ears</h1>
      <Context.Provider value={{context, setContext}}>
        <RouterProvider router={router} />
        <Link href="/two">Link</Link>
    </Context.Provider>
    </div>
  );
}

export default App;
