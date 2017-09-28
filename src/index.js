import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import './index.css'

import Home from './components/Home'
import PageArticleDetail from './components/PageArticleDetail'
import PageNotFound from './components/PageNotFound'
import PageCreateArticle from './components/PageCreateArticle'

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/article/:id" component={ PageArticleDetail } />
                <Route path="/new" component={ PageCreateArticle } />
                <Redirect exact from="/article" to="/" />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(<App />, root)
