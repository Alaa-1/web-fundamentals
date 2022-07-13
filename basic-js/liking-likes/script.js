function thumbsUp(element) {
    var likeText = document.querySelector('#' + element);
    var newText = parseInt(likeText.innerText) + 1;
    likeText.innerText = newText + " like(s)";
}

