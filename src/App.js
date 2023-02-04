import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Layout } from "./component/Layout";
import { Hosts } from "./pages/Hosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="main"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="hosts"
            element={
              <Layout>
                <Hosts />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
