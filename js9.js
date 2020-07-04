const ToDoList = function() {

let todolistElem = null,
    todolistSome = null;

const add = function(event) {
       // console.log('add');
       let inputName = todolistElem.querySelector('input[name="string_tdl"]').value;

       //console.log(inputName.value);

       if (!inputName) return;
       //console.log('cl');

       let some = document.createElement('li'),
           someList = document.createElement('div'),
           someListDelete = document.createElement('button');

        someList.classList.add('some');
        someListDelete.classList.add('list_tdl_delete');

        someList.innerHTML = inputName;
        someListDelete.innerHTML = 'X';

        some.appendChild(someList);
        some.appendChild(someListDelete);

        //console.log(some);
        event.preventDefault();

        todolistSome.appendChild(some);

        someListDelete.addEventListener('click', delString);
};

const del = function() {
        //console.log('del')
        todolistSome.innerHTML = '';
};

const delString = function() {
        //console.log('clear');
        //console.log(this.closest('li')); ищем ближайшего родителя
        this.closest('li').remove();
};

const init = function() {
        todolistElem = document.createElement('div');
        todolistElem.classList.add('to_do_list');

        let html = `
                        <div class="container">
                            <div class="top_tdl">
                                <h2>ToDo List</h2>
                            </div>
                            <div class="string_tdl">
                                <form>
                                    <input placeholder="Type your task..." type="text" name="string_tdl" />
                                    <button class="button_tdl add">Add</button>
                                    <button class="button_tdl del">Delete all</button>
                                </form>
                            <div class="list_tdl">
                                <ul>
                                   
                                </ul>
                            </div>
                            </div>
                        </div>`;

                todolistElem.innerHTML = html;

                document.body.appendChild(todolistElem);

                todolistSome = todolistElem.querySelector('.list_tdl ul');

                let addButton = todolistElem.querySelector('button.add'),
                 delButton = todolistElem.querySelector('button.del');

                addButton.addEventListener('click', add);
                delButton.addEventListener('click', del);


        }(); //смовызывающаяся функция
};
      
window.addEventListener('load', function(){

        new ToDoList();
    
});