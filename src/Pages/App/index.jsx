import { useRoutes, BrowserRouter } from 'react-router-dom'
import './app.scss'
import Login from '../Login'
import DashBoard from '../Dashboard'
import { GlobalProvider } from '../../Context/GlobalState'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login/>},
    { path: '/dashboard', element: <DashBoard />}
  ])

  return routes
}

function App() {
  
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
        <AppRoutes />
        </GlobalProvider>
        
      </BrowserRouter>
    </>
  )
}

export default App
