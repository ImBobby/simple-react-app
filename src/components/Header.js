import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => (
    <header className="app-header">
        <Container>
            <div>
                <Link to="/">{ props.title || 'Welcome to my blog' }</Link>
                { ( props.hideCreateBtn === undefined ) && (
                    <Link className="btn btn--primary" to="/new">New article</Link>
                ) }
            </div>
        </Container>
    </header>
)

export default Header