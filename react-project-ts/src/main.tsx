import { createRoot } from 'react-dom/client'
import App from './App.tsx'

/**
 * 1. 진입점 파일은 애플리케이션이 브라우저에서 실행되는 최초의 시작 지점
 * 2. React 자체 기능이 아니라, 리액트를 웹 페이지에 연결하는 역할을 담당한다<div className="">
 */
createRoot(document.getElementById('root')!).render(
    <App />
)
