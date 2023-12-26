import Layout from "./Layout";
import PurpleBox from "./PurpleBox";
import WhiteBox from "./WhiteBox";

export default function App() {
  return (
    <Layout>
      <PurpleBox>
        <WhiteBox title="Studio Display" text1="탁월한 카메라 및 오디오를 갖춘 몰입감 넘치는"
        text2="68.3cm 5K Retina 디스플레이." won="&#8361;2,090,000부터" />
        <WhiteBox title="Pro Display XDR" text1="프로를 위한 Apple의 최첨단"
        text2="80.3cm 6K Retina 디스플레이." won="&#8361;6,4990,000부터"/>
      </PurpleBox>
      <PurpleBox>
        <WhiteBox title="Pro Display XDR" text1="프로를 위한 Apple의 최첨단"
        text2="80.3cm 6K Retina 디스플레이." won="&#8361;6,4990,000부터"/>
      </PurpleBox>
    </Layout>
  );
}