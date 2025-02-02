

const Header = (title, date, temp) => {
    const div = document.createElement('div')
    div.classList.add('header')

    const span1 = document.createElement('span')
    span1.classList.add('date')
    span1.textContent = date

    const h1 = document.createElement('h1')
    h1.textContent = title

    const span2 = document.createElement('span')
    span2.classList.add('temp')
    span2.textContent = temp

    div.appendChild(span1)
    div.appendChild(h1)
    div.appendChild(span2)

    return div
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

}
const headerAppender = (selector) => {
  const headerContainer = document.querySelector(selector)
  headerContainer.appendChild(Header('hello', 'goodbye', 'hi again'))
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
