const dummy = (blogs) => {
  blogs = 1
  return blogs
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum,blog) => {
    return sum+blog.likes
  },0)
}

const top = (blogs) => {
  let max = 0
  let topBlog = null
  blogs.reduce((acc,blog) => {
    if(acc < blog.likes){
      // console.log(acc)
      max=blog.likes
      topBlog = blog
    }
    return max
  }, max)
  return {
    title : topBlog.title,
    author : topBlog.author,
    likes : topBlog.likes
  }
}

const topAuthor = (blogs) => {
  let listOfAuthors = {}
  blogs.forEach(blog => {
    let author = blog.author
    if(listOfAuthors[author]){
      listOfAuthors[author]++
    } else{
      listOfAuthors[author] =1
    }
  })
  let mostBlogs = 0
  let authorWithMostBlogs = null
  for (const author in listOfAuthors){
    if(listOfAuthors[author]>mostBlogs){
      mostBlogs = listOfAuthors[author]
      authorWithMostBlogs = author
    }
  } return{
    author:authorWithMostBlogs,
    blogs:mostBlogs
  }
}

const topAuthorFavs = (blogs) => {
  let listOfAuthors = {}

  blogs.forEach(blog => {
    let author = blog.author
    let likes = blog.likes
    if(listOfAuthors[author]){
      listOfAuthors[author] += likes
    } else{
      listOfAuthors[author] =likes
    }
  })
  let mostFavs = 0
  let authorWithMostFavs = null
  for (const author in listOfAuthors){
    if(listOfAuthors[author]>mostFavs){
      mostFavs = listOfAuthors[author]
      authorWithMostFavs = author
    }
  } return {
    author:authorWithMostFavs,
    likes:mostFavs
  }
}
module.exports = { dummy,totalLikes,top,topAuthor,topAuthorFavs }