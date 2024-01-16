import TopBar from "../components/TopBar";

export default function Movies() {
  return (
    <TopBar url="https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=" name="movie"/>
  )
}
