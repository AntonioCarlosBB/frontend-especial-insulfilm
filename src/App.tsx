import "./App.css";
import { Card } from "./components/cards/card";
import { useServiceData } from "./hooks/useServiceData";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { data } = useServiceData();


  return (
    <div>
      {data && (
        <Card
          id={data.id}
          service={data.service}
          price={data.price}
          dateService={data.dateService}
          timeService={data.timeService}
        />
      )}
    </div>
  );
}

export default App;
