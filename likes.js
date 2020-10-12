let likesTwitter = document.querySelector('.likes-twitter');
let totalLikes = document.querySelector('.like-count');

likesTwitter.onclick = function () {
    if(totalLikes.classList.contains('added')) {
        totalLikes.textContent--;        
    }  else { 
        totalLikes.textContent++;
    }
    totalLikes.classList.toggle('added')   
};

