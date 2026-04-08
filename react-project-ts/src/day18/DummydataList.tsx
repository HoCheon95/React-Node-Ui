import { useEffect, useState } from "react";
// DummydataList.tsx 파일을 만들고
// useEffect 는 처음 한번만 실행되도록 하세요

// 데이터를 담기위한 문자열 배열 타입의 useState 생성

// userEffect 첫 실행 시 setState 실행

// .map을 사용해서 JSX 에서 데이터 시가고하

// 해당 컴포넌트 완성 후 루트 컴포넌트에 import 한 후 정상 작동 확인
function DummydataList() {
    const [dataList, setDataList] = useState<string[]>([]);

    useEffect(()=>{
        const dummyData = ['데이터1', '데이터2', '데이터3'];

        
        
    },[dataList]);
    return(
        <div>
            
        </div>
    )
}
export default DummydataList