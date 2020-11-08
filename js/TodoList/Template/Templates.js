const TodoTemplate = (obj) => {
    return `
    <li id="item-${obj._id}" class="${(obj.isCompleted) ? 'completed' : ''}">
        <div class="view">
        <input class="toggle" type="checkbox" ${(obj.isCompleted) ? 'checked' : ''} />
        <label class="label">
            <select class="chip select">
            <option value="0" selected>순위</option>
            <option value="1">1순위</option>
            <option value="2">2순위</option>
            </select>
            ${obj.context}
        </label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${obj.context}" />
    </li>
    `
}

const UserTemplate = (obj) => `<button class="ripple" data-id="${obj._id}">${obj.name}</button>`

export { TodoTemplate, UserTemplate }