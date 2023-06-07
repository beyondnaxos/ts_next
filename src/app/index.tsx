import { useEffect, useState } from 'react'
import { getPosts } from './api/api'
import { Post } from './types'

export default function HomePage() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
  
}
