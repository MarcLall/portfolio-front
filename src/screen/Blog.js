import './Blog.css'

import AddArticle from '../components/AddArticle'
import Article from '../components/Article'

const blog = () => {
  return (
    <div>
      <h1>Bienvenue sur mon site realiser a la main par mes soins</h1>
      <div className='containerArticle'>
        <Article />
      </div>
      <div className='addarticle'>
      <AddArticle />
      </div>
    </div>
  )
}

export default blog
