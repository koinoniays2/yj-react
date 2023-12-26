// import ComponentChild from "./ComponentChild";

const MyComponent = (props) => { 
    // (props) -> ({name, addr, age})로 사용 가능
    const {name, addr, age} = props;
    return (
        <>
            <div>이름 {name}</div>
            <div>사는곳 {addr}</div>
            <div>나이 {age}</div>
            {/* <ComponentChild /> */}
        </>
    );
}

export default MyComponent;