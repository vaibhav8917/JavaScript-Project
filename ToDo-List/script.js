const title = document.querySelector('#title');
const add = document.querySelector('#button');
const list = document.querySelector('.list');

add.addEventListener('click', () => {
    const tasktext = title.value;
    
    if(tasktext !== "")
    {
        const p = document.createElement("p");
        p.innerHTML =`
            <span>${tasktext}</span>
            <input type="checkbox"></input>
            <i class="fa-solid fa-trash delete"></i>
        `;
        list.appendChild(p);
        title.value = "";
        
        p.querySelector('.delete').addEventListener('click', () => {
            p.remove();
        })
    }
    else{
        alert("Please enter the title");
    }
})













