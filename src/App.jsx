import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import ForYou from "./components/ForYou";
import BookSummary from "./components/BookSummary";



function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<HomePage />} />
<Route path="/book-summary/:id" element={<BookSummary />} />
<Route path="/for-you" element={<ForYou />} />
</Routes>

        
    </BrowserRouter>
  );
}
export default App;