let btnheader = document.getElementById("btn-header")
let form = document.getElementById("form")
let closeform = document.getElementById("close")

btnheader.addEventListener('click',()=>{
  document.body.appendChild(form)
  form.style.display='block';
})

closeform.addEventListener('click',()=>{
  document.body.appendChild(form)
  form.style.display='none';
})