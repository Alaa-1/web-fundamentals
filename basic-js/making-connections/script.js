function changeName(element) {
    var name = document.querySelector(".card-body h1")
    name.innerHTML = "Jessica Morgan"
}

function removeUser(element) {
    element.parentNode.parentNode.remove();
    var badge = document.querySelectorAll(".badge");
    badge[0].innerHTML -= 1;
    var alt = element.getAttribute("alt");
    var yourConnectionCount = parseInt(badge[1].innerHTML);
    if (alt == 'accept') {
        console.log(badge[1].innerHTML)
        badge[1].innerHTML = parseInt(badge[1].innerHTML) + 1 + "+";
    }

}
