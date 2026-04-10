// Todo 인터페이스 생성

import { useState } from "react";

// id(number), title(string), completed:boolean;
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function UpdateTodo() {
  // todo state를 생성
  // state의 타입은 Todo 또는 null(유니온 타입 사용)
  // 초기값은 null
  const [todo, setTodo] = useState<Todo | null>(null);

  const updateTitle = async () => {
    const response = await fetch(
      // https://jsonplaceholder.typicode.com/todos/1
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
            title:"HTTP 메서드를 이해하자!",
        }),
      }
    );
    // 응답 데이터 역직렬화
    const data = await response.json();
    // setState
    setTodo(data);
  };
}
