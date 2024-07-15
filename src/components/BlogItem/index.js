import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item-con">
      <div className="blog-title-date-con">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-desc">{description}</p>
    </li>
  )
}

export default BlogItem
