import axios from "axios"

const Card = (article) => {

  const {headline, authorPhoto, authorName} = article

  const div = document.createElement('div')
  div.classList.add('card')

  const div2 = document.createElement('div')
  div2.classList.add('headline')
  div2.textContent = headline

  const div3 = document.createElement('div')
  div3.classList.add('author')

  const div4 = document.createElement('div')
  div4.classList.add('img-container')

  const img = document.createElement('img')
  img.setAttribute('src', authorPhoto)

  const span = document.createElement('span')
  span.textContent = authorName

  div.appendChild(div2)
  div.appendChild(div3)
  div3.appendChild(span)
  div3.appendChild(div4)
  div4.appendChild(img)

  return div
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
 
  const cardContainer = document.querySelector(selector)

  axios.get('http://localhost:5000/api/articles')
    .then(result => {
      const sections = result.data.articles
      const keys = Object.keys(sections)
      keys.forEach(key => {
        const articles = sections[key]
        articles.forEach(article => {
          cardContainer.appendChild(Card(article))
        })
      })
    })
    .catch(error => {
      console.error(error)
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
