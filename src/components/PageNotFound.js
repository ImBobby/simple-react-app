import React from 'react'
import Container from './Container'
import Header from './Header'

const PageNotFound = ({ match }) => (
    <div>
        <Header />
        <Container>
            <div>404 content not found</div>
        </Container>
    </div>
)

export default PageNotFound