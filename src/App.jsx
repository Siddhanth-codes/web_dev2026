import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        hey it will appear in all the routes
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/example" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
        footer/contact us
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh",backgroundColor:"lightgray"}}>
      <Header />
      <div style={{ height: "90vh",backgroundColor:"red" }}>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/example">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

function Footer() {
  return <div>footer</div>;
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

export default App;
