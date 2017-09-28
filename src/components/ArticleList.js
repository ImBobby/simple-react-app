import React from 'react'
import { Link } from 'react-router-dom'

import DateFormat from './DateFormat'
import ArticleTitle from './ArticleTitle'
import getJSON from '../utils/getJSON'
import Loader from './Loader'
import './ArticleList.css'

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gettingData: true,
            data: []
        }

        getJSON('http://localhost:3001/articles/').then(res => {
            const data = [...res].sort((a, b) => {
                const timeA = new Date(a.date)
                const timeB = new Date(b.date)
                
                if ( timeA < timeB ) return 1
                if ( timeA > timeB ) return -1
                return 0
            })

            this.setState({
                gettingData: false,
                data
            })
        }).catch(console.log)
    }

    populateArticle(d) {
        const preword = d.content.split('\n')[0]
        
        return (
            <li key={ d.id }>
                <Link to={`article/${d.id}`}>
                    <ArticleTitle title={ d.title } />
                </Link>
                <DateFormat date={ d.date } />
                <p className="artile-preword">{ preword }</p>
            </li>
        )
    }
    
    render() {
        if ( !this.state.data.length && this.state.gettingData ) return (
            <Loader />
        )
        if ( !this.state.data.length && !this.state.gettingData ) return (
            <p>No article...</p>
        )

        return (
            <ul className="article-list">
                { this.state.data.map(this.populateArticle) }
            </ul>
        )
    }
}

export default ArticleList
