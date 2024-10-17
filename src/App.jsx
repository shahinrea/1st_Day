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
        <div className="w-8/12 h-[250px] border-2 border-red-400"></div>
        {/* right side */}
        <div className="w-4/12 h-[250px] border-2 border-blue-300"></div>
      </div>
    </div>
  );
}

export default App;
