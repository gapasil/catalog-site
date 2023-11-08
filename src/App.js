import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Title } from "./pages/title/Title";
import { FindPage } from "./pages/findpage/FindPage";
import { QuestionPage } from './pages/questionPage/QuestionPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<FindPage/>}/>
          <Route exact path="/question" element={<QuestionPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
