//adding more subtask to list
//add eben listener
let addsubtask=document.getElementById('addMoreSubtask');
addsubtask.addEventListener('click',function(){
    let li=document.createElement('li');
    li.classList.add('listItem');
    li.innerHTML='<input type="text" class="form-control" name="subtask" placeholder="wrtite something">';
    let parent=document.getElementById('subtaskList');
    parent.appendChild(li);

});