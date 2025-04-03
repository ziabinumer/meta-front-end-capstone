import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
