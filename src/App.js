import React from 'react'
import { BrowserRouter , Switch, Route} from 'react-router-dom'
import './App.css'
import Landing from './Landing'
import AddRecipes from './AddRecipes'
import ListOfDiets from './ListOfDiets'
import Login from './Login'
import Register from './Register'
import NavBar from './NavBar'

// import WeeklyCalendar from './WeeklyCalendar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />

      {/* <Route path='/how-it-works' component={HowItWorks} /> */}

            <Route path='/user/login' component={Login} />

            <Route path='/signup' component={Register} />

            <Route path='/diet/show/' component={ListOfDiets} />

            <Route path='/recipe/add/:dietName' component={AddRecipes} />

          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }

}

export default App;
