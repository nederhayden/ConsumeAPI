import "./App.scss";
import { HeaderComponent } from "./components/Header";
import { HomeComponent } from "./components/Home";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
