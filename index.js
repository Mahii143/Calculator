let btn_press = document.getElementsByClassName("btn-press");
let value_box = document.getElementById("value_box");
// console.log(btn_press);
let title = document.getElementById("title");
title.addEventListener("mouseenter",myfunc = () => {
    title.innerText = "By Mohamed Mahir";
    title.style.padding = '30px';
    title.style.fontSize = '3rem';
    title.style.transition = '0.4s';
});
title.addEventListener("mouseleave",myfunc = () => {
    title.style.padding = '20px';
    title.style.fontSize = '4.5rem';
    title.innerText = "Calculator";
    title.style.transition = '0.3s';
});
let flag = 0, flag2 = 0, num1, num2,symb,count=0;
for(let i=0;i<btn_press.length;i++) 
{
    btn_press[i].addEventListener("click",onClick = () => {
        // console.log(btn_press[i].innerText);
        // console.log(value_box.innerText);
        let vals = value_box.innerText, dotCount=0;
        for(let k=0;k<vals.length;k++) {
            if(vals[k]=='.') {
                dotCount++;
            }
        }
        if(flag==1 && btn_press[i].innerText=='=') {
            num2 = value_box.innerText;
            if(Number(num1)!=0) {
                switch(symb) {
                    case '+':
                        value_box.innerHTML = Number(num1) + Number(num2);
                        break;
                    case '-':
                        value_box.innerHTML = Number(num1) - Number(num2);
                        break;
                    case 'x':
                        value_box.innerHTML = Number(num1) * Number(num2);
                        break;
                    case '/':
                        value_box.innerHTML = Number(num1) / Number(num2);
                        break;
                }
            }
            else {
                value_box.innerHTML = "Can't divide by Zero";
            }
            flag = 0;
            flag2 = 1;
            // console.log(flag2);
        }
        if(flag==0 && (btn_press[i].innerText=='+' || btn_press[i].innerText=='-' || btn_press[i].innerText=='x'|| btn_press[i].innerText=='/')) {
            num1 = value_box.innerText;
            symb = btn_press[i].innerText;
            value_box.innerHTML = "0";
            flag = 1;
        }
        if(btn_press[i].innerText=='AC') {
            value_box.innerHTML = "0";
            flag = 0;
            flag2 = 0;
        }
        if(btn_press[i].innerText=='C') {
            // console.log('C '+flag2);
            if(value_box.innerText.length>1 && value_box.innerText!="Can't divide by Zero" && value_box.innerText!="Infinity") {
                value_box.innerHTML = value_box.innerText.slice(0, -1);;
            }
            else{
                value_box.innerHTML = 0;
            }
        }
        if(value_box.innerText.length<13) {
            if(btn_press[i].innerText>-1 && btn_press[i].innerText<10 || (dotCount==0 && btn_press[i].innerText=='.' || value_box.innerText=="Can't divide by Zero")){
                // console.log("number");
                if((flag2==1 || value_box.innerText==0) && btn_press[i].innerText!='.' && dotCount==0){ 
                    value_box.innerHTML = btn_press[i].innerHTML;
                    flag2=0;
                }else {
                    value_box.innerHTML += btn_press[i].innerHTML;
                }
            } 
        }
    });
}
