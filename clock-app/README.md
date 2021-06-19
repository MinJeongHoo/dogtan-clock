## 2번째 첼린지

# Component란 ? 
- 앱을 이루는 최소한의 단위가 컴포넌트. 
- 각 부분을 재상용 가능한 조각으로 UI를 나눈 것과 같다.
- 이 컴포넌트들이 유기적으로 잘 연결되고 동작될때 같은 리액트앱이라도 훨씬 효율적인 앱이 될 수 있다.

# Component 구성

# TOP 
 - 셀럽 문구 Component

# Main
 - 시간 Component
 - 지역 Component
 - Button Component

# Footer Component
 - Currently Timezone
 - Day of week
 - Day of year
 - week numbers


 ## WebRendring

 request/response -> loading -> scripting -> rendering -> layout -painting

 <             construction               > <         operation          >
 
 request/response 
 브라우저가 HTML파일을 요청

 loaidng 
 데이터를 받아온다

 scripting
 DOM TREE ,CSSOM 으로 변환

 rendering
 Render tree로 변환

 layout
 최종적으로 계산된 css 파일 크기계산
 x,y 크기와 높이가 계산

 painting
 paint 비트맵 단위로 이미지를 준비





 ## lifecycle

 # 마운트

 - 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출

 - constructor()

 - static getDerivedStateFromProps()

 - render()

 - componentDidMount()

# 업데이트
- props 또는 state가 변경되면 갱신이 발생. 아래 메서드들은 컴포넌트가 다시 렌더링될 때 순서대로 호출

- static getDerivedStateFromProps()

- shouldComponentUpdate()

- render()

- getSnapshotBeforeUpdate()

- componentDidUpdate()

# 마운트 해제

- 컴포넌트가 DOM 상에서 제거될 때에 호출 됩니다. 

- componentWillUnmount()


# 오류 처리
 - 아래 메서드들은 자식 컴포넌트를 렌더링하거나, 자식 컴포넌트가 생명주기 메서드를 호출하거나, 또는 자식 컴포넌트가 생성자 메서드를 호출하는   과정에서 오류가 발생했을 때에 호출됩니다.

 - static getDerivedStateFromError()
 - componentDidCatch()

## lifecycle 그림
https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8

## Event Handler

 - React의 이벤트는 소문자 대신 카멜 케이스를 사용
 - JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달
 - return false를 반환해도 기본 동작 방지 x 무조건 event.preventDefault를 명시적으로 호출


 - https://ko.reactjs.org/docs/handling-events.html