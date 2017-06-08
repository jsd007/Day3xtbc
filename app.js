let arr = [0]
const app = {
  init(selectors) {
    this.max = 0
    
    this.list = document.querySelector(selectors.listSelector)
    
    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', this.addDino.bind(this))
  },

  addDino(ev) {
    ev.preventDefault()
    const dino = {
      id: this.max + 1,
      name: ev.target.dinoName.value,
    }
    arr.concat(arr, dino)
    const listItem = this.renderListItem(dino)
    this.list.appendChild(listItem)

    ++ this.max
  },



  renderListItem(dino) {
    const item = document.createElement('li')
    item.textContent = `${dino.name}`
    const b1 = document.createElement('button')
    b1.textContent = '*'
    b1.addEventListener('click', promoteItem)
    item.appendChild(b1)
    const b2 =document.createElement('button')
    b2.textContent = 'Delete'
    b2.addEventListener('click', deleteItem)
    item.appendChild(b2)    
    return item
  },

}

 function deleteItem(ev){
    const b = ev.target
    const p = b.parentNode
    p.parentNode.removeChild(p)
}

   function promoteItem(ev){
    const b = ev.target
    b.textContent = 'X'
    b.addEventListener('click', depromoteItem)
    b.parentElement.style.backgroundColor = 'red'
  }

  function depromoteItem(ev){
    const b = ev.target
    b.textContent = '*'
    b.addEventListener('click', promoteItem)
    b.removeEventListener('click', depromoteItem)
    b.parentElement.style.backgroundColor = 'white'
}

app.init({
  formSelector: '#dino-form',
  listSelector: '#dino-list',
})
