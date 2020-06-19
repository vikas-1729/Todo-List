//adding more subtask to list
//add eben listener
// this function simply add subtasks when we click on '+' sign..
let addsubtask=document.getElementById('addMoreSubtask');
if(addsubtask!=null){
addsubtask.addEventListener('click',function(){
    let li=document.createElement('li');
    li.classList.add('listItem');
    li.innerHTML='<input type="text" class="form-control" name="subtasks" placeholder="wrtite something">';
    let parent=document.getElementById('subtaskList');
    parent.appendChild(li);

});
}
// this function simply called whenever there is change in checkbox when it is checked we do opacity as 0.5
// amd if not checked opacity is 1...
var a=document.querySelectorAll("input[type=checkbox]");
for(let checkbox of a){
    checkbox.addEventListener( 'change', function() {
        let opacity="1";
        if(this.checked) {
            
           opacity="0.5";
        }
        markIt(this.value,opacity); 
    });
}
let b=document.getElementById('adc');
console.log(b);
function markIt(id,val){
    // now in home.ejs what we do we store a value at each checkbox this value is same as id of tr so
    // we select checkbox takes it's value it is same as id of td of checkbox we style it opacity  
    let tr=document.getElementById(id);
    tr.style.opacity=val;
}
function unmarkIt(id){
    let tr=document.getElementById(id);
    tr.style.opacity='1';
}