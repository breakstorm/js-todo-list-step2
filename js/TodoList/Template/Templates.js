const Template = (obj) => {
    return `
    <li id="item-${obj.id}" class="${(obj.complete) ? 'completed' : ''}">
        <div class="view">
        <input class="toggle" type="checkbox" ${(obj.complete) ? 'checked' : ''} />
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
// const TemplateEditing = (obj) => {
//   return `
//   <li class="editing">
//     <div class="view">
//       <input class="toggle" type="checkbox" />
//       <label class="label">완료된 타이틀</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="완료된 타이틀" />
//   </li>`
// }
// const TemplateCompleted = (obj) => {
//   return `
//   <li id="item-${obj.id}" class="completed">
//     <div class="view">
//       <input class="toggle" type="checkbox" checked/>
//       <label class="label">${obj.context}</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="${obj.context}" />
//   </li>`
// }

export { Template }