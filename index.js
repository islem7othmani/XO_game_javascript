let title = document.querySelector('.title');

let group =[];
// first function : alternative roles of player X and  player O :) 
let turn = 'x';
function game(id)
{ 
    let element = document.getElementById(id);

    if( turn ==='x' && element.innerHTML ==''){
        element.innerHTML ='X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if( turn ==='o' && element.innerHTML =='' ){
        element.innerHTML ='o';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}
// third function to to show the winner and start a new game :)
function test(num1,num2,num3){
    title.innerHTML ='winner';
    document.getElementById('square'+num1).style.background='red';
    document.getElementById('square'+num2).style.background='red';
    document.getElementById('square'+num3).style.background='red';
    setInterval(function(){title.innerHTML+= '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
// second function to test the winner :)
function winner (){
    for(let i=1; i<10 ;i++){
        group[i] = document.getElementById('square'+i).innerHTML;
    }
    if(group[1]== group[2] && group[2]== group[3] && group[1]!='' ){
    test(1,2,3);
    }
    else if(group[1]== group[4] && group[4]== group[7] && group[4] !=''){
        test(1,4,7);
    }
    else if(group[7]== group[8] && group[8]== group[9] && group[8] !=''){
        test(7,8,9);
    }
    else if(group[9]== group[6] && group[6]== group[3] && group[6] !=''){
        test(9,6,3);
    }
    else if(group[1]== group[5] && group[5]== group[9] && group[5] !=''){
        test(1,5,9);
    }
    else if(group[3]== group[5] && group[5]== group[7] && group[5] !=''){
        test(3,5,7);
    }
    else if(group[4]== group[5] && group[5]== group[6] && group[5] !=''){
        test(4,5,6);
    }
    else if(group[2]== group[5] && group[5]== group[8] && group[5] !=''){
        test(2,5,8);
    }
}

