const container = document.getElementById('root');

for(let i = 0;i<30;i++)
{
    const div = document.createElement('div');
    container.appendChild(div);
}
const divs = document.querySelectorAll('#root div');

function animateblocks()
{
anime({
    targets:divs,
    translateX:()=>
    {
        return anime.random(-750,750);
    },
    translateY:()=>
    {
        return anime.random(-400,400);
    },
    duration:4000,
    scale:()=>
    {
        return anime.random(1,5);
    },
    complete:animateblocks
});
}

animateblocks();