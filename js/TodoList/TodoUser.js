class TodoUser {
    constructor (parent) {
        this.$UserCreateButton = document.querySelector('.user-create-button')
        this.$UserCreateButton.addEventListener('click', (e) => {
            this.addUser(parent)
        })
    }
    addUser (parent) {
        const userName = prompt("추가하고 싶은 이름을 입력해주세요.")
        parent.addUserItem (userName)
    }
    clickUser () {}
}

// const onUserCreateHandler = () => {
//     const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
// }

// //TODO: user컴포넌트 추가로 만들어야 함. 
// //TODO: mock데이터로 동작이 되도록 만들어야 함. 
// const userCreateButton = document.querySelector('.user-create-button')
// userCreateButton.addEventListener('click', onUserCreateHandler)

export { TodoUser }