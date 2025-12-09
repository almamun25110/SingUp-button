
const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const singinBtn = document.getElementById('singinBtn');
const singupBtn = document.getElementById('singupBtn');

singupBtn.onclick = function() {
    title.innerHTML = "Sing Up";
    nameField.style.display = 'block';
}


singinBtn.onclick = function() {
    title.innerHTML = "Login";
    nameField.style.display = 'none';
}
