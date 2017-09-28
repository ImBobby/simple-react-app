import React from 'react'
import { Redirect } from 'react-router-dom'

import Container from './Container'
import Header from './Header'

class PageCreateArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            redirect: false
        }
        this.handlePost = this.handlePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handlePost(e) {
        e.preventDefault()

        if ( !this.state.title || !this.state.content ) {
            return alert('please fill all fields')
        }

        const body = {
            ...this.state,
            date: (new Date()).toString()
        }
        delete body.redirect
        
        fetch('http://localhost:3001/articles', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        }).then(res => {
            this.setState({ redirect: true })
        }).catch(console.log)
    }

    handleChange(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    
    render() {
        return (
            <div>
                <Header hideCreateBtn />
                <Container>
                    <form className="block" onSubmit={this.handlePost}>
                        <fieldset>
                            <legend className="block-half">Create new article</legend>

                            <div className="block-half">
                                <input className="form-input" type="text" name="title" placeholder="Title" defaultValue={this.state.title} onKeyUp={this.handleChange} />
                            </div>
                            <div className="block-half">
                                <textarea className="form-input" placeholder="Content" name="content" rows="10" defaultValue={this.state.content} onKeyUp={this.handleChange}></textarea>
                            </div>
                            <button className="btn btn--block btn--primary">Save</button>
                        </fieldset>
                    </form>
                    {this.state.redirect && (
                        <Redirect to="/" />
                    )}
                </Container>
            </div>
        )
    }
}

export default PageCreateArticle