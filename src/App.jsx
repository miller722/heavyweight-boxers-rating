import "./App.css";
import { heavyweightBoxers } from "./data/boxer-list.json";

function App() {
  return (
    <>
      <table className="table__wrapper">
        <thead>
          <tr className="text__medium"></tr>
        </thead>
        <tbody>
          {heavyweightBoxers.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
