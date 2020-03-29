const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const breakpoint = document.querySelector('#breakline');
const red_value = document.querySelector('#r_value');
const green_value = document.querySelector('#g_value');
const blue_value = document.querySelector('#b_value');
const display = document.querySelector('.colordisplay');
const hexvalue = document.querySelector('#hexvalue');
const rgbvalue = document.querySelector('#rgbvalue');
console.log(red,green,blue);
function convert(num)
{
    if(num.length<2)
    {
        return '0'+num;
    }
    else
    {
        return num
    }
}
function changecolor()
{
    let r_hex = parseInt(red.value,10).toString(16);
    let g_hex = parseInt(green.value,10).toString(16);
    let b_hex = parseInt(blue.value,10).toString(16);
    
    let totalhex = '#'+convert(r_hex)+convert(g_hex)+convert(b_hex);
    let totalrgb = '('+red.value+','+green.value+','+blue.value+')';
    display.style.background = totalhex;
    hexvalue.innerHTML = totalhex;
    rgbvalue.innerHTML = totalrgb;
    
}
red.addEventListener('change',()=>
{
    red_value.innerHTML = red.value;
    changecolor();
})
green.addEventListener('change',()=>
{
    green_value.innerHTML = green.value;
    changecolor();
})
blue.addEventListener('change',()=>
{
    blue_value.innerHTML = blue.value;
    changecolor();
})
red.addEventListener('input',()=>
{
    red_value.innerHTML = red.value;
    changecolor();
})
green.addEventListener('input',()=>
{
    green_value.innerHTML = green.value;
    changecolor();
})
blue.addEventListener('input',()=>
{
    blue_value.innerHTML = blue.value;
    changecolor();
})