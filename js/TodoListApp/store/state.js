export default {
  list: [
    {id: 0, context: 'test context', complete: false},
    {id: 1, context: 'test context', complete: true}
  ],
  filteredType: window.location.hash.replace("#", ""),
  // filteredType: {
  //   value: window.location.hash.replace("#", "")
  // },
}