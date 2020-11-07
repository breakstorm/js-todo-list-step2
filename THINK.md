# js-todo-list-stop2 

## state 
String name
String _id 
Array todoList / Object item 
item
    - String _id 
    - String contents
    - Boolean isCompleted 
    - String priority [NONE, SECOND, FIRST]

## event 

## todo 
1. js-todo-list-stop1에서 작성한 코드를 여기에 맞게 마이그레이션 
- [ ] 템플릿(Template) 값을 바꾸어야 함. render가 되지 않음. completed가 state값에 영향이 받도록 변경.
- [O] Filter 12 완료된 것 표시 안됨 
- [O] 모든 아이템 삭제 기능 안됨 
---
- [O] todo list에 todoItem을 키보드로 입력하여 추가하기
- [O] todo list의 체크박스를 클릭하여 complete 상태로 변경. (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
- [O] todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
- [O]  todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
- [O] todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
- [ ] todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기
2. 이름 추가하는 기능을 눌렀을때 이벤트 기능 추가하기 
3. GET 메소드 부터 fetch 적용