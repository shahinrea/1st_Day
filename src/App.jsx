import BannerRight from './BannerRight';
import BannerSlider from './BannerSlider';
import FooterSection from './FooterSection';
import MenuBar from './MenuBar';
import Navbar from './Navbar';
import TopHeader from './TopHeader';

function App() {
  return (
    <div className="">
      <TopHeader />
      <Navbar />
      <MenuBar />
      <div className="max-w-7xl mx-auto flex mt-6">
        {/* left side */}
        <div className="w-8/12">
          <BannerSlider />
        </div>

        {/* right side */}
        <div className="w-4/12">
          <BannerRight />
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
