import Banner from "./components/Banner";
import Movie from "./components/Movie";
import NavPage from "./components/NavPage";
import SearchPage from "./components/SearchPage";
import TrendingPage from "./components/TrendingPage";

function App() {
  return (
    <div>
      {/* 네비게이션 */}
      <NavPage />
      {/* 검색 영역 */}
      <SearchPage />
      {/* 배너 */}
      <Banner />
      {/* Trending */}
      <TrendingPage />
      <Movie />
    </div>
  );
}

export default App;
