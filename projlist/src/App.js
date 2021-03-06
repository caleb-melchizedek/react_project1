import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
