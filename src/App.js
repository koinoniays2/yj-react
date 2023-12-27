// import Header from "./Header";
// import WhiteBox from "./WhiteBox";
// import ContentBox from "./ContentBox";
// import Footer from "./Footer";
import ImgeTitle from "./ImgeTitle"
import WhiteBox from "./WhiteBox";

function App() {
  return (
    <>
      {/* <Header /> */}
      <ImgeTitle title="Comics" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, porro!"
      imgUrl="https://plus.unsplash.com/premium_photo-1671647122567-ade48287e971?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      {/* <WhiteBox>
        <ContentBox title="Lorem, ipsum." body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore."></ContentBox>
        <ContentBox title="Lorem, ipsum." body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore."></ContentBox>
        <ContentBox title="Lorem, ipsum." body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore."></ContentBox>
      </WhiteBox> */}
      <div className="w-full h-[300px] bg-white flex justify-center">
        <div className="w-[1000px] h-full relative">
            <div className="bg-white w-full h-full absolute -top-10 left-0 flex items-center justify-center space-x-8">
              <WhiteBox />
            </div>
        </div>
        {/* <div className="absolute -top-12 left-0 w-full h-full"></div> */}
      </div>
      <ImgeTitle title="영진직업전문학교" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, porro!"
      imgUrl="https://plus.unsplash.com/premium_photo-1671647122567-ade48287e971?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
