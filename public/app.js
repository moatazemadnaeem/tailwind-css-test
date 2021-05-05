const menu=document.getElementById('menu')
const items=document.getElementById('items')

menu.addEventListener('click',()=>{
    if(items.classList.contains('hidden')){
        items.classList.remove('hidden')
    }else{
        items.classList.add('hidden')
    }
})