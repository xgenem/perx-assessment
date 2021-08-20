// import logo from "./logo.svg";
import { Provider } from "react-redux";
import Lull from "./components/App";
import { store } from "./redux/store";

import "./styles/index.scss";

export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Lull />
      </Provider>
    </div>
  );
}
