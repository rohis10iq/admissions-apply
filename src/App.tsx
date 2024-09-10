import { lazy, Suspense } from "react";

const Career = lazy(() => import("./components/Career"));
const Courses = lazy(() => import("./components/Courses"));
const Events = lazy(() => import("./components/Events"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Navbar = lazy(() => import("./components/Navbar"));
const Partners = lazy(() => import("./components/Partners"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Courses />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Career />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
