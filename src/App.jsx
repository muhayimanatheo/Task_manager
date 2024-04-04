import {BrowserRouter as Router, Route,Routes} from"react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import AddTask from "./components/pages/AddTask";
// import Task from "./components/Task";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AddTask" element={<AddTask />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
