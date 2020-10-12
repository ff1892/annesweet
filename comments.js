let userComments = document.querySelector('.user-comments');
let newUserNameComment = document.querySelector('.user-name-comment');
let newUserCommentContent = document.querySelector('.write-comments');
let commentForm = document.querySelector('.white-form.form');
let userMail = document.querySelector('.user-mail-comment');


commentForm.onsubmit = function (evt)  {
    evt.preventDefault();
    let newComment = document.createElement('div');
    let newUser = document.createElement('div');
    let newCommentContent = document.createElement('p');
    let newUserPic = document.createElement('div');
    let newUserName = document.createElement('p');
    userComments.append(newComment);
    newComment.classList.add('comment-item');
    newComment.append(newUser);
    newUser.classList.add('user');
    newComment.append(newCommentContent);
    newCommentContent.classList.add('comment-content');
    newUser.append(newUserPic);
    newUserPic.classList.add('userpic');
    newUserPic.classList.add('new-userpic');
    newUserPic.classList.add('userpic');
    newUser.append(newUserName);
    newUserName.classList.add('username');
    newUserName.textContent = newUserNameComment.value;
    newUserNameComment.value = "";
    newCommentContent.textContent = newUserCommentContent.value;
    newUserCommentContent.value = "";
    userMail.value = "";
}



