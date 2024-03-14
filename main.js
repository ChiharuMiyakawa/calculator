'use strict';
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
let button;
let concatText = "";

buttons.forEach((btn) => {
    btn.addEventListener('click',()=>{
        button = btn.textContent;
        if(button==='='){
            concatText = eval(concatText);
        }else if(button==='AC'){
            concatText = 0;
        }else{
            console.log(concatText);
            reset();
            operator();
            point();
            // 既に表示されている演算子を、ボタンの演算子に置き換える
            if(operator() == true ){
                concatText = concatText.slice(0,-1) + button;

            }else if(point() == true){                
                //文字列末尾の小数点を上書き
                concatText = concatText.slice(0,-1) + button;
 
            }else{
                concatText += button;
            }
        }
        result.textContent = concatText;
        concatText = String(concatText);
    })
});
//0が先頭のとき入力値に上書き
function reset (){
    if(concatText==0){
        concatText = "";
    }else{
        concatText = concatText;

    }
}
//文字列末尾が小数点の状態で、新たに小数点を押す
function point (){
    return ["."].includes(button)
    && ["."].includes(concatText.slice(-1));

}

//末尾に演算子が表示されている状態で、新たに演算子を押す
function operator (){
    return ["+","-","*","/"].includes(button)
    && ["+","-","*","/"].includes(concatText.slice(-1));
}
