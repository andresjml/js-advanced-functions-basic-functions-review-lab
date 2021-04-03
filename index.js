// Your code here
function saturdayFun(act='roller-skate') {
    let msg1=`This Saturday, I want to ${act}!`
    //console.log(`This Saturday, I want to ${act}!`); 
    return msg1;
  }

/*let fn = function mondayWork(act2="go to the office"){
    console.log(`This Monday, I will ${act2}.`);
}*/
function mondayWork(act2='go to the office'){
    let msg2=`This Monday, I will ${act2}.`
    //console.log(`This Monday, I will ${act2}.`);
    return msg2;
}

function wrapAdjective(wrap="*"){
    return function innerFunct(adj="special"){
        return `You are ${wrap}${adj}${wrap}!`
    }
}

const Calculator = {
    add:function(num1,num2){
        return num1+num2;
    },
    subtract:function(num1,num2){
        return num1-num2;
    },
    multiply:function(num1,num2){
        return num1*num2;
    },
    divide:function(num1,num2){
        return num1/num2;
    }
}

function actionApplyer(numstart, arr){
    let a = numstart
    for (let i=0;i < arr.length;i++){
        a=arr[i](a)
    }
    return a;
}
