import React,{ useRef,useState } from "react";

const DiaryEditor = () => {
    {/**focus를 통해 react dom에 접근 */}
    const authorInput = useRef();
    const contentInput = useRef();


    const [state,setState] = useState({
        author : "",
        content : "",
        emotion : 1,
});

const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name]:e.target.value,
        
    });
};

const handleSubmit = () => {
    if (state.author.length < 1) {
        // focus
        authorInput.current.focus();
        return ;
    } 
    if (state.content.length < 5){
        // focus
        contentInput.current.focus();
        return ;
    }
    alert("저장 성공");
};


    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            {/**onChange함수를 통해 input이 변화할 때마다 setAuthor를 통해 author 업데이트 */}
            <input
            ref={authorInput}
            name = "author"
            value={state.author} 
            onChange={handleChangeState}/>
        </div>
        <div>
            {/**textarea */}
            <textarea 
            ref={contentInput}
            name = "content"
            value={state.content} 
            onChange={handleChangeState}/>
        </div>
        <div>오늘의 감정점수: 
            <select 
            name = "emotion" 
            value={state.emotion} 
            onChange={handleChangeState} 
            >
                <option value = {1}>1</option>
                <option value = {2}>2</option>
                <option value = {3}>3</option>
                <option value = {4}>4</option>
                <option value = {5}>5</option>
           </select>
           </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};

export default DiaryEditor;