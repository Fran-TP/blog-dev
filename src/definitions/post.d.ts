export interface Post {
  title: string
  author: string
  date: string
  image: {
    url: string
    alt: string
  }
  description: string
  pubDate: string
  tags: string[]
}
