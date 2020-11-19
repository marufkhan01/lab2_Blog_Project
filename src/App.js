import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import BlogProvider from './context/BlogProvider'

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post}> 
            </Route>
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  )
}

export default App
