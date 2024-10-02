import GridPattern from "./components/magicui/animated-grid-pattern";
import Home from "./Home";
import { DockDemo } from "./Homecomponent/Docke";

function App() {
  return (
    <>
      {/* <GridPattern
        numSquares={40}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className="inset-x-0 inset-y-[-30%] min-h-fit  skew-y-12"
      /> */}
      <DockDemo />
      <Home />
    </>
  );
}

export default App;
