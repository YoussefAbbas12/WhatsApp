let input = document.querySelector('.data');
let chat = document.querySelector('.chat');
let sendBtn = document.querySelector('#send');

function show(){
    if(input.value != ''){
        sendBtn.removeAttribute('class')
        sendBtn.setAttribute('class','bx bx-send')
    }else{
        sendBtn.removeAttribute('class')
        sendBtn.setAttribute('class','bx bxs-microphone')
    }
};

function makeMassage(){
    sendBtn.removeAttribute('class')
    sendBtn.setAttribute('class','bx bxs-microphone')

    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time = hour +':'+ minutes

    let massageText = input.value;
    chat.innerHTML += `
        <div class="recive row">
            <p class="outgoingText">${massageText}</p>
            <p class="time">${time}</p>
            <i class='bx bx-check-double true'></i>
        </div>
    `
    input.value = '';
}




sendBtn.addEventListener('click' , ()=>{
    makeMassage()
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        makeMassage();
    }
});

let mainFrinds = document.querySelector(".mainFrinds");
let main = document.querySelector(".main");
let EnterText = document.querySelector(".EnterText");
let mainChatHeader = document.querySelector(".mainChatHeader");
let imgs = document.querySelector(".imgs");
let back = document.querySelector(".back");
let mainChat = document.querySelector(".mainChat");
let frindAccount = document.querySelector(".frindAccount");

let arrow = document.querySelector(".back");

function reset(){
    mainFrinds.removeAttribute('class');
    main.removeAttribute('class');
    EnterText.removeAttribute('class');
    mainChatHeader.removeAttribute('class');
    imgs.removeAttribute('class');
    back.removeAttribute('class');

    mainFrinds.classList = "mainFrinds";
    main.classList = "main";
    EnterText.classList = "EnterText";
    mainChatHeader.classList = "mainChatHeader";
    imgs.classList = "imgs";
    back.classList = "bx bx-right-arrow-alt back";
}

function defult(){
    mainFrinds.removeAttribute('class');
    main.removeAttribute('class');
    EnterText.removeAttribute('class');
    mainChatHeader.removeAttribute('class');
    imgs.removeAttribute('class');
    back.removeAttribute('class');

    mainFrinds.classList = "mainFrinds mainFrindsOpen";
    main.classList = "main mainOpen";
    EnterText.classList = "EnterText EnterTextOpen";
    mainChatHeader.classList = "mainChatHeader mainChatOpenHeaderOpen";
    imgs.classList = "imgs imgsOpen";
    back.classList = "bx bx-right-arrow-alt back backOpen";
    console.log(mainFrinds)
}

arrow.addEventListener('click',function(){
    reset()
    main.removeAttribute('class');
    mainChat.removeAttribute('class');
    mainFrinds.removeAttribute('class');

    main.classList = "main mainClose";
    mainChat.classList = "mainChat mainChatClose";
    mainFrinds.classList = "mainFrinds mainFrindsClose";
});




function youssef (){
    main.removeAttribute('class');
    mainChat.removeAttribute('class');
    mainFrinds.removeAttribute('class');
    back.removeAttribute('class');
    EnterText.removeAttribute('class');
    mainChatHeader.removeAttribute('class');
    imgs.removeAttribute('class');
    
    main.classList = "main mainClose";
    mainChat.classList = "mainChat mainChatOpen";
    mainFrinds.classList = "mainFrinds mainFrindsOpen";
    EnterText.classList = "EnterText EnterTextOpen";
    back.classList = "bx bx-right-arrow-alt back backOpen";
    mainChatHeader.classList = "mainChatHeader mainChatHeaderOpen";
    imgs.classList = "imgs imgsOpen";  
}
let frinds = document.querySelector('.frindAccount');

console.log(frinds)

frinds.addEventListener('click' , () => {
    youssef()
})