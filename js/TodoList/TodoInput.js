import { ENTER, ESC } from './Variable/KeyVariable.js'

class TodoInput {
    constructor (parent) {
        this.$TodoInput = document.querySelector('.new-todo')
        this.$TodoInput.addEventListener('keyup', (e) => {
            console.log('TEST: new-todo eventlistener', );
            if (e.key === ENTER ) {
                const input = this.$TodoInput.value.trim()
                parent.addItem(input)
                this.$TodoInput.value = ''
            }
            /** ESC를 눌렀을때 발생하는 이벤트 정리 */
            if (e.key === ESC ) {
                this.$TodoInput.value = ''
            }
        })
    }
}
export { TodoInput }