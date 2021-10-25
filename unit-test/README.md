# Jest

- FaceBook 에서 만듬
- cra 안에 들어잇음
- 유닛 테스트임
- .test.ts, test.spec.ts, folder 라고 지칭 하는 파일들을 자동으로 테스트 하심

## 명령어

- yarn start
- 옵션을 선택해서 다양하게 Ω실행가능

## 함수

- description(그룹 함수), it,test 그룹 안의 단위 함수
- expect().matcher() // 예상후. 확인하는 함수가 들어간다
- render: DOM 에 컴포넌트를 렌더링 하는 함수 (인자로 랜더링할 React 컴포넌트가 들어감)
 <br> - return 에 의해 쿼리함수 기타 함수들을 반환함 ex) const { getByText } = render(<App />) 
 <br> 
- getByText(): query 함수, 문자열을 찾아준다
- getBy => 2개 이상 일 경우 오류, queryBy => null, findBy Promise 

## prettier 설정
 - eslint, prettier 설정으로 테스트 하는데 도움을 주는 설정 추가함
 - webstorm 일 경우 ctrl 

## fireEvent

 - 이벤트 발생