import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './styles/index.scss'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
