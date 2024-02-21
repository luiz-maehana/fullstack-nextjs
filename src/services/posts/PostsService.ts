import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter' 

export interface Post {
  metadata: {
    dateStart: string
    dateEnd: string
    url: string
    excerpt: string
    tags: string[]
  }
  slug: string
  title: string
  content: string
}

export default function PostsService() {
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POSTS = path.resolve('.', '_data', 'posts')
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8'})
      const postsPromises = postFiles.map(async(postFileName) => {
        const filePath = path.join(PATH_POSTS, postFileName)
        const postFile = await fs.readFile(filePath, { encoding: 'utf-8'})
        const { data, content } = matter(postFile)
        const post: Post =  {
          metadata: {
            dateStart: new Date(data.dateStart).toISOString(),
            dateEnd: new Date(data.dateEnd).toISOString(),
            url: (data.url) ? data.url : '',
            excerpt: data.excerpt,
            tags: data.tags,
          },
          slug: data.slug,
          title: data.title,
          content: content
        }
        return post
      })
      const posts = Promise.all(postsPromises)
      const orderedPosts = (await posts).sort((a: Post, b: Post) => {
        return new Date(b.metadata.dateStart).getTime() - new Date(a.metadata.dateStart).getTime()
      })
      return posts
    }
  }
}