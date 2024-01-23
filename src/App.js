import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomersPageWithPagination from "./pages/CustomersPageWithPagination";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return ( 
    <Router>
      <Navbar />
      <main className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/customers-page" element={<CustomersPageWithPagination />} />
        </Routes>
      </main>
    </Router>
   );
}
 
export default App;