import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list-con">
      {blogsList.map(eachObj => (
        <BlogItem blogItem={eachObj} key={eachObj.id} />
      ))}
    </ul>
  )
}

export default BlogList
