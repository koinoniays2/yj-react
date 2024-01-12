import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrendingPage() {
    const [lists, setLists] = useState([]);
    let tabs = [
      {id: "all", label: "All"}, //id:패치요청 url에서 바뀔 값, label:탭바 내용 
      {id: "movie", label:"Movies"},
      {id: "tv", label:"TV"}

    ];
    //클릭 시 url 주소 내용 변경(기본값은 all)
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // API 요청
    useEffect(() => {
    const url =
      `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`;
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
  }, [activeTab]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1300px] h-[400px] pt-8">
        {/* 타이틀 */}
        <div className="flex">
          <h2 className="px-4 py-2 font-semibold text-[24px]">Trending</h2>
          {/* 탭바 */}
          <div className="border-2 border-gray-900 rounded-full">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => {setActiveTab(tab.id)}} 
              className={`${activeTab === tab.id ? "text-white" : "text-black"} relative rounded-full px-6 py-3 text-xl font-semibold`}>
                {activeTab === tab.id && (
                  <motion.span layoutId="bubble" transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                  className="absolute inset-0 bg-gray-900 rounded-full -z-10" />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* 리스트 */}
        <div className="w-full h-[350px] bg-main flex flex-col justify-center">
          <Slider {...settings}>
              {lists.map((item, index) => (
                  <article key={index} className="w-full flex justify-center">
                      <div className="flex flex-col items-center">
                          <img className="" src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} alt="이미지" />
                          <p className="font-bold text-center text-lg">{item.title}</p>
                          <p className="text-ml text-gray-500">{item.release_date}</p>
                      </div>
                  </article>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
