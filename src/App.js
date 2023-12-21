import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <header className="header">
        <div id="logo">카카오톡</div>
        <nav id="nav">
          <span>카톡 안녕가이드</span>
          <span>카톡 설명서</span>
          <span>다운로드</span>
        </nav>
      </header>
      <main>
        <section className="container">
          <article>
            <h2>이모티콘</h2>
            <span>우리들의 새로운 언어, 이모티콘!</span>
            <span>글자만으로는 내 감정을 표현하기 어려운 순간들,</span>
            <span>고민하지 말고 이모티콘을 이용해보세요!</span>
          </article>
          <div>
            <div id="img"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App; //import 하기 위해 export
