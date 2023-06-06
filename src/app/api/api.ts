import { Post } from '../types'

// on utlise l'inteface Post pour typer le tableau de posts
const FAKE_POSTS: Post[] = [
  {
    id: 1,
    title: 'Mon premier post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse',
  },
  {
    id: 2,
    title: 'Mon deuxième post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse',
  },
  {
    id: 3,
    title: 'Encore un post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse',
  },
  {
    id: 4,
    title: 'Un autre post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse',
  },
  {
    id: 5,
    title: 'Un post encore',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse',
  },
]

export function getPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    // simule une API en renvoyant les données après un délai de 500ms
    setTimeout(() => resolve(FAKE_POSTS), 500)
  })
}
