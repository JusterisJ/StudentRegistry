import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Praktika5 from "./Praktika5/Praktika5";
import Praktika6 from "./Praktika6/Praktika6";
import Praktika7 from "./Praktika7/Praktika7";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import Students from "./StudentList/Students";
import AddStudent from "./StudentList/AddStudent";
import StudentRegistry from "./StudentRegistry/StudentRegistry";
import StudentsList from "./Students/StudentsList";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="praktika5"> Praktika 5 </Link>
        <Link to="praktika6"> Praktika 6 </Link>
        <Link to="praktika7"> Praktika 7 </Link>
      </nav> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StudentsList />{" "}
            </>
          }
        />
        <Route path="/" element={<StudentRegistry />} />
        <Route path="/praktika5" element={<Praktika5 />} />
        <Route path="/praktika6" element={<Praktika6 />} />
        <Route path="/praktika7" element={<Praktika7 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
