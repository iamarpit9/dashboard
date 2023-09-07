import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="!overflow-hidden">
        <Header />
        <div className="grid mt-20 grid-cols-3 min-h-screen max-h-screen max-w-[1260px] mx-auto">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
