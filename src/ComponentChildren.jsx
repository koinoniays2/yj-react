const ComponentChildren = (props) => {
    return (
        <>
            <div className="bg-red-500">{props.children}</div>
            {/* 컴포넌트 태그 사이의 내용을 보여주는 props = children */}
        </>
    )
};

export default ComponentChildren;