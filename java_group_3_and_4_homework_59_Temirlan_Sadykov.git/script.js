'use strict';
//Урок 58
//Задание 1
function hideSplashScreen(){
    document.getElementById('page-splash').hidden = true;
    document.body.classList.remove('no-scroll');
}

function showSplashScreen(){
    document.getElementById('page-splash').hidden = false;
    document.body.classList.add('no-scroll');
}

//Задание 2
function createCommentElement(comment){
    comment = document.querySelector('[name=userComment]').value;
    if(comment == undefined || comment.trim().length == 0){
        return 0;
    }
    else {
        let element = document.createElement('a');
        element.href = "#";
        element.innerHTML = "You";
        let elem = document.createElement('p');
        elem.innerHTML = comment;
        document.body.querySelector('[name=userComment]').before(element);
        document.body.querySelector('[name=userComment]').before(elem);
    }
}

function createPostElement(post){
    post = document.querySelector('[name=userPost]').value;
    if(post == undefined || post.trim().length == 0){
        return 0;
    }
    else {
        let elem = document.createElement('p');
        elem.innerHTML = post;
        document.body.querySelector('[name=userPost]').before(elem);
    }
}


//3 и 4 задание
document.body.querySelector('[name=newPost]').hidden = true;
document.body.querySelector('[name=newImage]').hidden = true;
document.body.querySelector('[name=newMyPost]').hidden = true;
document.body.querySelector('[name=myPost]').hidden = true;
document.body.querySelector('[name=newPost]').hidden = true;

function clickButton(){
    document.body.querySelector('[name=newPost]').hidden = false;
    document.body.querySelector('[name=newImage]').hidden = false;
    document.body.querySelector('[name=myPostButton]').hidden = true;
}

function createImageElement(){
    let imageUrl = document.body.querySelector('[name=newPost]').value;
    if(imageUrl == 0 || imageUrl.trim().length == 0){
        return 0;
    }
    else{
        let image = document.createElement('img');
        image.src = imageUrl;
        image.classList.add('d-block', 'w-100');
        document.body.querySelector('[name=newImage]').before(image);
        document.body.querySelector('[name=newImage]').hidden = true;
        document.body.querySelector('[name=newMyPost]').hidden = false;
        document.body.querySelector('[name=myPost]').hidden = false;
        document.body.querySelector('[name=newPost]').hidden = true;
    }
}

function addMyPostElement(post){
    post = document.querySelector('[name=myPost]').value;
    if(post == undefined || post.trim().length == 0){
        return 0;
    }
    else {
        let elem = document.createElement('p');
        elem.innerHTML = post;
        document.body.querySelector('[name=myPost]').before(elem);
        document.body.querySelector('[name=newMyPost]').hidden = true;
        document.body.querySelector('[name=myPost]').hidden = true;
    }
}




//Урок 59
//1 задание
window.addEventListener('load', function() {

    let heart = document.getElementsByClassName('fa-heart');
    for(let i = 0; i < heart.length; i++){
        heart[i].addEventListener('click', function(event){
            let like = event.currentTarget;
            if(like.classList.contains("text-danger")){
                like.classList.remove("text-danger", "fas");
            }
            else {
                like.classList.add("text-danger", "fas");
            }
        })
    }
    

//2 задание 
let doubleHeart = document.getElementsByClassName('image');
for(let i = 0; i < doubleHeart.length; i++){
    doubleHeart[i].addEventListener('dblclick', function(event){
        let doubleLike = document.getElementsByClassName("heart")[i];
        let doubleLike1 = document.getElementsByClassName("fa-heart")[i];
        if(doubleLike.classList.contains("text-danger")){
            doubleLike.classList.remove("text-danger");
            doubleLike.classList.add("muted");
            doubleLike1.classList.remove("fas");
            doubleLike1.classList.add("far");
        }
        else {
            doubleLike.classList.add("text-danger");
            doubleLike.classList.remove("muted");
            doubleLike1.classList.add("fas");
            doubleLike1.classList.remove("far");
        }
    })
}

//3 задание
let bookmark = document.getElementsByClassName('fa-bookmark');
for(let i = 0; i < bookmark.length; i++){
    bookmark[i].addEventListener('click', function(event){
        let mybookmark = event.currentTarget;
        if(mybookmark.classList.contains("far", "fa-bookmark")){
            mybookmark.classList.remove("far", "fa-bookmark");
            mybookmark.classList.add("fas", "fa-bookmark");
        }
        else if(mybookmark.classList.contains("fas", "fa-bookmark")){
            mybookmark.classList.remove("fas", "fa-bookmark");
            mybookmark.classList.add("far", "fa-bookmark");
        }
    })
}
})


//4 задание сделал в 58 уроке задание 1

