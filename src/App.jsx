import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import ForYou from "./components/ForYou";
import BookSummary from "./components/BookSummary";
import SuggestedBooks from "./components/SuggestedBooks";
import SelectedBooks from "./components/SelectedBooks";
import RecommendedBooks from "./components/RecommendedBooks"; 
import SalesPage from "./components/SalesPage"; 
import SubscriptionPlans from "./components/SubscriptionsPlans";
import Success from "./components/Success";
import Cancel from "./components/Cancel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<HomePage />} />
<Route path="/book-summary/:id" element={<BookSummary />} />
<Route path="/for-you" element={<ForYou />} />
<Route path="/suggested-books" element={<SuggestedBooks />} />
<Route path="/selected-books" element={<SelectedBooks />} />
<Route path="/recommended-books" element={<RecommendedBooks />} />
<Route path="/sales-page" element={<SalesPage />} />
<Route path="/subscriptions-plans" element={<SubscriptionPlans />} />
<Route path="/success" element={<Success />} />
<Route path="/cancel" element={<Cancel />} />
</Routes>

        
    </BrowserRouter>
  );
}
export default App;