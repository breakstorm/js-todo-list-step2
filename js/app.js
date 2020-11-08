import { TodoInput } from './TodoList/TodoInput.js'
import { TodoList } from './TodoList/TodoList.js'
import { TodoFilter } from './TodoList/TodoFilter.js'
import { TodoUser } from './TodoList/TodoUser.js'
import { TodoTemplate, UserTemplate } from './TodoList/Template/Templates.js'

class App {
    constructor () {
        this.TODO_ID = 0
        this.USER_ID = 0
        this.STATUS = ''
        this.item = [] // {_id, context, isCompleted, priority}, {id: ID++, context: 'test', complete: false}
        this.user = [] // {_id, name }
        this.TodoInput = new TodoInput(this)
        this.TodoList = new TodoList(this)
        this.TodoFilter = new TodoFilter(this)
        this.TodoUser = new TodoUser(this)
        this.TodoTemplate = TodoTemplate
        this.UserTemplate = UserTemplate

        this.$TodoList = document.querySelector('.todo-list')
        this.$TodoCount = document.querySelector('.todo-count strong')
        this.$UserList = document.getElementById('user-list')
    }

    itemBeforeRender (renderItem) {
        return renderItem.map(todoItem => TodoTemplate(todoItem))
    }
    render(status) {
        const targetItem = this.item.filter(todoItem => {
            if (this.STATUS === '' ) return true
            if (this.STATUS === 'active' && !todoItem.isCompleted) return true
            if (this.STATUS === 'completed' && todoItem.isCompleted) return true
        })

        const resultList = this.itemBeforeRender(targetItem)

        console.log('TEST: render', targetItem);

        const resultLength = resultList.length
        const resultHTML = resultList.join()
        this.$TodoList.innerHTML = ''
        this.$TodoList.insertAdjacentHTML('beforeend', resultHTML)
        this.$TodoCount.innerText = resultLength
    }
    
    addItem (inputValue) {
        const eachItem = {_id: this.TODO_ID++, context: inputValue, isCompleted: false, priority: 'NONE'}
        this.item.push(eachItem)
        this.render()
    }
    afterUpdateItem (targetElement, value) {
        const itemId = targetElement.id.replace('item-', '')
        this.item = this.item.map(todoItem => {
            if ( itemId === ''+todoItem._id) {
                todoItem.context = value
            }
            return todoItem
        })
        this.render()
    }
    deleteItem (targetElement) {
        const itemId = targetElement.id.replace('item-', '')
        this.item = this.item.filter( todoItem =>  ( itemId === ''+todoItem._id) ? false : true )
        this.render()
    }
    deleteItemAll () {
        console.log('TEST: call deleteItemAll', );
        if (this.item.length === 0) return;
        this.item = [];
        this.render();
    }
    completeItem (targetElement) {
        // item값 변경 
        const itemId = targetElement.id.replace('item-', '')
        this.item = this.item.map(todoItem => {
            console.log('TEST: complete', todoItem._id, itemId, ''+todoItem._id === itemId);
            if ( ''+todoItem._id === itemId ) {
                todoItem.isCompleted = !todoItem.isCompleted
            }
            return todoItem
        })
        this.render()
    }
    changeStatus (status = '') {
        this.STATUS = status
        this.render()
    }
    addUserItem (userName) {
        // 처음에는 UserList에 데이터를 추가하는 작업이 필요.
        // 그 다음에 랜더링 하는 작업 추가. 
        const UserHTML = this.UserTemplate({_id: this.USER_ID++,name: userName})
        console.log('TEST: addUserItem', this.$UserList, UserHTML);
        this.$UserList.insertAdjacentHTML('beforeend', UserHTML)
    }
}
  
const todo = new App()
