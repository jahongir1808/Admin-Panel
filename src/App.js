import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeP from "./pages/HomeP";
import "./App.css";
import StudentP from "./pages/StudentP";
import TeacherP from "./pages/TeacherP";
import GroupP from "./pages/GroupP";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/student" element={<StudentP />} />
          <Route path="/teacher" element={<TeacherP />} />
          <Route path="/group" element={<GroupP />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
