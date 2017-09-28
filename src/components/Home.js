import React from 'react'

import ArticleList from './ArticleList'
import Container from './Container'
import Header from './Header'

const Home = () => (
    <div>
        <Header />
        <Container>
            <ArticleList />
        </Container>
    </div>
)

export default Home