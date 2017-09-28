import React from 'react'

import ArticleTitle from './ArticleTitle'
import DateFormat from './DateFormat'
import getJSON from '../utils/getJSON'
import Loader from './Loader'

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        
        getJSON(`http://localhost:3001/articles/${props.id}`).then(res => {
            this.setState({
                data: {...res}
            })
        }).catch(console.log)
    }
    
    render() {
        if ( !this.state.data ) {
            return <Loader />
        }

        return (
            <div>
                <ArticleTitle title={ this.state.data.title } />
                <DateFormat date={ this.state.data.date } />
                {this.state.data.content.split('\n').map((c, i) => {
                    return <p key={i}>{c}</p>
                })}
            </div>
        )
    }
}

export default ArticleDetail