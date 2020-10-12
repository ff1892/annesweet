let articles = document.querySelectorAll('.articles-item');
let filter = document.querySelector('.articles-filter');

filter.onchange = function () {
    for (let articleItem of articles) {
        if (articleItem.dataset.article !== filter.value && filter.value !== 'all' ) {
            articleItem.classList.add('hidden');
        } else {
            articleItem.classList.remove('hidden');
        }
    }
};