let ans = ['rock', 'paper', 'scissors'];
let randomN = Math.floor(Math.random() * 3); //[0,1,2];
let result;

let resultImg = document.createElement('img');
let imageSelect = document.createElement('img');
let imgname = "image/" + ans[randomN] + ".png";
resultImg.setAttribute('src', imgname);
resultImg.classList.add('result');
imageSelect.classList.add('result');

let link = document.createElement('a');
link.classList.add('link');
link.text="⬅️Back";
link.href="index.html";

let title = document.querySelector('.title');
let container = document.querySelector('.container');
let game = document.querySelector('.game');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');

rock.addEventListener("click", check)
paper.addEventListener("click", check)
scissor.addEventListener("click", check)

function check(img) {
    imageSelect.src = "image/" + img.srcElement.alt + ".png";
    game.remove();
    container.append(imageSelect);
    container.append(resultImg);
    container.insertAdjacentElement('afterend',link)
    let res = img.srcElement.alt;
    if (res == ans[randomN]) {
        result = 0;
    }
    else if (res == 'rock' && randomN == '1') {
        result =2;
    }
    else if (res == 'paper' && randomN == '2') {
        result = 2;
    }
    else if (res == 'scissors' && randomN == '0') {
        result = 2;
    }
    else {
        result = 1;
    }
    displayResult(result);
}

function displayResult(result){
    
    if(result==0){
        title.textContent = "Tie😊";
    }
    else if(result==1){
        title.classList.add('textWin');
        title.textContent = "Win✌️";
    }
    else{
        title.classList.add('textLose');
        title.textContent = "Loose😱";
    }
}


// console.log(randomN);

