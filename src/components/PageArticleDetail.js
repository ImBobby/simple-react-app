import React from 'react'
import Container from './Container'
import Header from './Header'
import ArticleDetail from './ArticleDetail'

const PageArticleDetail = ({ match }) => (
    <div>
        <Header />
        <Container>
            <ArticleDetail id={match.params.id} />
        </Container>
    </div>
)

export default PageArticleDetail