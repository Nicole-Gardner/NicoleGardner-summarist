import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import ForYou from "./components/ForYou";
import BookSummary from "./components/BookSummary";
import SuggestedBooks from "./components/SuggestedBooks";
import SelectedBooks from "./components/SelectedBooks";
import RecommendedBooks from "./components/RecommendedBooks";
import SalesPage from "./components/SalesPage";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import LibraryPage from "./components/LibraryPage";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/SideBar";
import LibraryLayout from "./components/LibraryLayout";
function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-summary/:id" element={<BookSummary />} />
        <Route element={<LibraryLayout />}>
  <Route path="/for-you" element={<ForYou />} />
  <Route path="/library-page" element={<LibraryPage />} />
</Route>
        <Route path="/suggested-books" element={<SuggestedBooks />} />
        <Route path="/selected-books" element={<SelectedBooks />} />
        <Route path="/recommended-books" element={<RecommendedBooks />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/subscription-plans"element={<SubscriptionPlans />}/>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
    
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;