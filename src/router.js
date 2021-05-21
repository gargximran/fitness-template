import {Switch, Route} from 'react-router-dom'

import TestComponent from './TestComponent'
import Blog from './Pages/Blog'
import HomePage from './Pages/Home'
import About from './Pages/AboutUs'
import Schedule from './Pages/Schedule'
import ContactUs from './Pages/ContactUs'


const Routes = () => {
    return (

          <Switch>
                <Route path={"/test"} exact component={TestComponent} />
                <Route path={"/about"} exact component={About} />
                <Route path={"/blog"} exact component={Blog} />
                <Route path={"/schedule"} exact component={Schedule} />
                <Route path={'/contact'} exact component={ContactUs} />
                <Route path={"/"} exact component={HomePage} />
          </Switch>

    );
}


export default Routes