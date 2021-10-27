const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


placeHolders.forEach((placeHolder) => {
    placeHolder.addEventListener('dragover', dragover);
    placeHolder.addEventListener('dragenter', dragenter);
    placeHolder.addEventListener('dragleave', dragleave);
    placeHolder.addEventListener('drop', dragdrop);
})

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item';
    event.target.classList.add('drops');

}

function dragover(event) {
    event.preventDefault();

}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.classList.remove('hovered', 'hold');
    event.target.append(item)
}