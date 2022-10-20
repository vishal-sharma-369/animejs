const container = document.querySelector('.container');

for(let i = 1;i<=400;i++)
{
    const div = document.createElement('div');
    div.style.width = '5%';
    div.style.height = '5%';
    div.classList.add('div');
    // div.style.backgroundColor = 'black';

    container.appendChild(div);
}

const divs = document.querySelectorAll('.div')
anime.timeline(
    {
        targets:divs,
        // loop:true
    }
).add(
    {
        // translateX:0
    }
)