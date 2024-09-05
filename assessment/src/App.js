
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import GrapthForm from "./components/graph-form/GrapthForm";
import GraphList from "./components/graph-list/GraphList";
import GraphDetail from "./components/graph-list/GraphDetail";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} ></Route>
      <Route path="/login" element={
        <Dashboard><Login/></Dashboard>
      } ></Route>
      <Route path="/graph-form" element={
        <Dashboard><GrapthForm/></Dashboard>
      } ></Route>
      <Route path="/graph-list" element={
        <Dashboard><GraphList/></Dashboard>
      } ></Route>
      <Route path="/graph-detail/:id" element={
        <Dashboard>
          <GraphDetail />
        </Dashboard>
      } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
