//const tasksArray = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", (e)=> {
  e.preventDefault()
  const A= e.target["new-task-description"].value
  const B= e.target["priority"].value
  // tasksArray.push({description: A, priority: B})
  figuringThisOut(A,B)
  form.reset()
 })
});

// let asc = true
// sortingButton.addEventListener('click', ()=> {
//   asc=!asc
// })

function figuringThisOut (task, priority){
  let p = document.createElement('p')
  p.textContent = task + ' Priority: ' + priority
  document.querySelector('#tasks').appendChild(p)

  let btn = document.createElement('button')
  btn.addEventListener('click', remover)
  btn.textContent = "X"
  btn.style.marginLeft = '5px'
  p.appendChild(btn)

  if (priority === 'low')
  {p.style.color='green'}
  if (priority === 'medium')
  {p.style.color='yellow'}
  if (priority === 'high')
  {p.style.color='red'}
}

function remover(e){
  e.target.parentNode.remove()
}