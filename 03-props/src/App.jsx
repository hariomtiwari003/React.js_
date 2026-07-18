import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div className="parent">
      <Card user='Aman' age={20}/>
       <Card user='hariom' age={22}/>
    </div>
  );
}

export default App;