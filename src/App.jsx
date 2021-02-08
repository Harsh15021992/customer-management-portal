import "./App.css";
import { customerContext } from "./customer.context";
import { useCustomerData } from "./customer.hook";
import Navigator from "./components/Navigator/Navigator";

const App = () => {
  return (
    <customerContext.Provider value={useCustomerData()}>
      {/* Application Router*/}
      <Navigator />
    </customerContext.Provider>
  );
};

export default App;
