const main = document.querySelector('.main');

for(let i=1;i<=30;i++)
{
    const circle = document.createElement('div');
    const x = Math.floor(Math.random()*100);
    circle.style.width = x+'px';
    circle.style.height = x+'px';
    const fromTop = Math.floor(Math.random()*80);
    const fromLeft = Math.floor(Math.random()*80);
    circle.style.position = 'absolute';
    circle.style.top = fromTop+'%';
    circle.style.left = fromLeft+'%';
    circle.style.backgroundColor = 'yellow';
    circle.style.borderRadius = '50%';
    circle.style.zIndex = '-1';
    main.appendChild(circle);
}