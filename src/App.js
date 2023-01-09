import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './Components/Header/Topics/Topics';
import Quizs from './Components/Quizs/Quizs';
import Main from './Outlay/Main';

function App() {
  useEffect(() => {
    AOS.refresh();
  }, [])

  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/topics', element: <Topics />,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),

        },
        {
          path: '/', element: <Topics />,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),

        }
      ]
    },

    {
      path: '/quiz/:reactId', element:<Quizs/>,
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.reactId}`)
      }
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
