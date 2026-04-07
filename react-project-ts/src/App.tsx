import UserProfile from "./day17/StateCompress.tsx";

function App() {

  /**
   * 1. 기본경로 : src/APP.tsx
   * -> 리액트 프로젝트(vite, cra 등)에서 가장 기본적으로 사용되는 위치
   * 2. 루트 컴포넌트는 main.tsx 에서 처음으로 렌더링되는 사용자 저으이 컴포넌트(리액트 애플리케이션의 가장 상위 컴포넌트)
   * 3. 이 컴포넌트로부터 리액트의 모든 컴포넌트 트리가 시작된다
   * -> App.tsx 아래에 다른 하위 컴포넌트를 배치하며 점점 구조가 확장됨
   * 4. 애플리케이션 전체 구조를 잡는 컨테이너(뼈대) 역할을 한다
   * 5. 루트 컴포넌트는 반드시 단 하나여야 한다.(SPA)
   */

  return (
    <>
      <UserProfile/>
    </>
  )
}

export default App
