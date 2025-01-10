import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"))
const DockDemo = lazy(() => import("./Homecomponent/Docke").then(module => ({ default: module.DockDemo })));
import Loader from "./Homecomponent/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <DockDemo />
        <Home />
      </Suspense>
    </>
  );
}

export default App;
