function createTemplate(post) {
  const template = document.querySelector('#blog-card')
  const article = template.content.cloneNode(true)

  const img = article.querySelector('img')
  const title = article.querySelector('h3')
  const date = article.querySelector('.date')
  const excerpt = article.querySelector('.excerpt')
  const link = article.querySelectorAll('a')

  img.src = post.image
  img.alt = ''
  title.innerText = post.title
  date.innerText = post.date
  excerpt.innerText = post.excerpt
  link.forEach((a) => {
    a.href = post.link
  })

  return article
}

export async function loadPosts() {
  const template = document.querySelector('#blog-card')
  const posts = await fetch('../5-page-site/post/posts.json')
    .then((res) => res.json())
    .catch((err) => console.error(err))
  posts.forEach((post) => {
    template.appendChild(createTemplate(post))
  })
}
