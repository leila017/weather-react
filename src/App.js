import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return ( <div className="Container">
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine
        Temperature={"19"}
        Description={"sunny"}
        Humidity={"84"}
        Wind={"1.35"}
      />
    </div>
    </div>
  );
}
