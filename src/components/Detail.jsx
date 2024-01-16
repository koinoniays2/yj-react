import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import changeRuntime from "../lib/changeRuntime";
import CircularProg from "./CircularProg";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  //   console.log(id);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWNhODU3NDBjOWVlYzc4ZTU1ZTQ2NDA1MWE4NTRjNiIsInN1YiI6IjY1OWNhMTg3NTVjMWY0MDFhNDZlMzMxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V7UIZD9fGetrKMwieqk-VeRqr2hl3tDlLO_VwMHDvC4",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);
  return (
    <Layout>
      {/* backdrop_path이미지 */}
      <div className="relative w-full h-[500px] flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            alt="backimage"
          />
        </div>
        {/* 필터 백그라운드 div */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/80 flex justify-center">
            <div className="w-[1300px] h-full flex">
                {/* 왼쪽: 이미지 */}
                <div className="w-1/4 h-full flex items-center">
                    <div className="w-[80%] h-[80%] flex items-center">
                        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="mainimage" />
                    </div>
                </div>
                {/* 오른쪽: 설명 */}
                <div className="w-3/4 h-full flex flex-col justify-center text-white space-y-4">
                    {/* 제목 */}
                    <div className="flex space-x-2">
                        <h1 className="font-bold text-3xl">{data?.title}</h1>
                        <h2 className="text-2xl">({data?.release_date?.split("-")[0]})</h2>
                    </div>
                    {/* 개봉일, 장르, 러닝타임 */}
                    <div className="flex space-x-2">
                        {/* 개봉일 */}
                        <span>{data?.release_date?.replaceAll("-","/")}</span>
                        {/* 구분자 win+;*/}
                        <span>•</span>
                        {/* 장르 */}
                        <span className="space-x-2">
                            {data?.genres?.map(genre => (
                                <span key={genre.name}>
                                    {genre.name}
                                </span>
                            ))}
                        </span>
                        <span>•</span>
                        {/* 러닝타임 changeRuntime.js에 함수 정의*/}
                        <span>{changeRuntime(data?.runtime)}</span>
                    </div>
                    {/* 점수 */}
                    <div>
                        <CircularProg rate={Math.round(data?.vote_average * 10)} />
                    </div>
                    {/* 줄거리 */}
                    <div>
                        <h2 className="text-2xl">개요</h2>
                        <p>{data?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
