import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrendingPage() {
    const [lists, setLists] = useState([]);
    useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
        setLists(json?.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        이전
      </div>
    );
  };
  
  // 다음 버튼 컴포넌트
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        다음
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />, // 이전 버튼 컴포넌트 설정
    nextArrow: <CustomNextArrow />  // 다음 버튼 컴포넌트 설정
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1300px] h-[400px] pt-8">
        {/* 타이틀 */}
        <h2 className="px-4 py-2 font-semibold text-[24px]">Trending</h2>
        {/* 리스트 */}
        <Slider {...settings}>
            {lists.map((item, index) => (
                <article key={index} className="w-full flex justify-center">
                    <div className="flex flex-col items-center">
                        <img className="" src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt="이미지"/>
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-ml text-gray-500">{item.release_date}</p>
                    </div>
                </article>
            ))}
        </Slider>
      </div>
    </div>
  );
}
