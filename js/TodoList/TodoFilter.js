class TodoFilter {
    constructor (parent) {
        this.$DeleteAll = document.querySelector('.clear-completed')
        window.addEventListener('hashchange', (e) => {
            const status = /#(.*)$/g.exec(e.newURL)[1] || ''
            this.changeSelected(status)
            parent.changeStatus(status)
        })
        this.$DeleteAll.addEventListener('click', (e) => {
            console.log('TEST: delete all ', e);
            parent.deleteItemAll();
        })
    }
    changeSelected (status) {
        const selected = document.querySelector('.filters .selected')
        if (selected) {
            selected.className = selected.className.replace(' selected', '')
        }

        switch(status) {
            case 'active':
                const active = document.querySelector('.filters .active')
                active.className = active.className + ' selected'
                break
            case 'completed':
                const completed = document.querySelector('.filters .completed')
                completed.className = completed.className + ' selected'
                break
            default:
                const all = document.querySelector('.filters .all')
                all.className = all.className + ' selected'
                break
        }
    }
}
export { TodoFilter }