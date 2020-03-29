const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const deg = document.querySelector('#degree');
const red_value = document.querySelector('#r_value');
const green_value = document.querySelector('#g_value');
const blue_value = document.querySelector('#b_value');
const deg_value = document.querySelector('#d_value');
const display = document.querySelector('.colordisplay');
const firstbtn = document.querySelector('#btn1');
const secondbtn = document.querySelector('#btn2');
const fcolor = document.querySelector('#fcolor');
const scolor = document.querySelector('#scolor');
let fixcolorone = '#000000';
let fixcolortwo = '#000000'; 
let istwoactivated = false;
let totalgradient = document.querySelector('#totalgradient');
/*const hexvalue = document.querySelector('#hexvalue');
const rgbvalue = document.querySelector('#rgbvalue');*/
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
function changecolor(num)
{
    console.log(num);
    if(num===1 && istwoactivated===true)
    {
        return;
    }
    if(num===2 && istwoactivated===false)
    {
        return;
    }
    let r_hex = parseInt(red.value,10).toString(16);
    let g_hex = parseInt(green.value,10).toString(16);
    let b_hex = parseInt(blue.value,10).toString(16);
    let d_value = parseInt(deg.value,10);
    console.log(r_hex,g_hex,b_hex,d_value);
    
    let totalhex = '#'+convert(r_hex)+convert(g_hex)+convert(b_hex);
    console.log(totalhex);
    let ans = 'linear-gradient('+d_value+'deg'+','+fixcolorone+','+fixcolortwo+')';
    display.style.background = ans;
    totalgradient.innerHTML = ans;
    if(num===1)
    {
        fcolor.innerHTML = totalhex;
        fixcolorone = totalhex;
        console.log(fixcolorone);
    }
    else
    {
        scolor.innerHTML = totalhex;
        fixcolortwo = totalhex;
        console.log(fixcolortwo);
        
    }
    
}
function pickcolor(num)
{
    
    red.addEventListener('change',()=>
    {
        red_value.innerHTML = red.value;
        changecolor(num);
    })
    green.addEventListener('change',()=>
    {
        green_value.innerHTML = green.value;
        changecolor(num);
    })
    blue.addEventListener('change',()=>
    {
        blue_value.innerHTML = blue.value;
        changecolor(num);
    })
    deg.addEventListener('change',()=>
    {
        deg_value.innerHTML = deg.value;
        changecolor(num);
    })
    red.addEventListener('input',()=>
    {
        red_value.innerHTML = red.value;
        changecolor(num);
    })
    green.addEventListener('input',()=>
    {
        green_value.innerHTML = green.value;
        changecolor(num);
    })
    blue.addEventListener('input',()=>
    {
        blue_value.innerHTML = blue.value;
        changecolor(num);
    })
    deg.addEventListener('input',()=>
    {
        deg_value.innerHTML = deg.value;
        changecolor(num);
    })
}

firstbtn.addEventListener('click',()=>
{
    istwoactivated=false;
    pickcolor(1);
})
secondbtn.addEventListener('click',()=>
{
    istwoactivated = true;
    pickcolor(2);
})
