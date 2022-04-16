import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { useAuthContext } from './hooks/useAuthContext'
import { Redirect } from 'react-router-dom'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user && <Home />}
              {!user && <Redirect to={'/login'} />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to={'/'} />}
            </Route>
            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to={'/'} />}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      )
      }
    </div>
  );
}

export default App
