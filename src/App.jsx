import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import HomePage from './pages/public/HomePage';
import QuestionsPagePrivate from './pages/private/QuestionsPagePrivate';
import OneQuestionPagePrivate from './pages/private/OneQuestionPagePrivate';
import OneQuestionPagePublic from './pages/public/OneQuestionPagePublic';
import QuestionsPagePublic from './pages/public/QuestionsPagePublic';
import CreateQuestion from './pages/private/CreateQuestion';
import MyQuestions from './pages/private/MyQuestions';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  return (
    
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="QuestionsPage" element={<QuestionsPagePublic/>}/>
            <Route path="Question/:id" element={<OneQuestionPagePublic/>}/>
        </Route>
          <Route path="/private" element={<PrivateLayout/>}>
            <Route path="QuestionsPage" element={<QuestionsPagePrivate/>}/>
            <Route path="Question/:id" element={<OneQuestionPagePrivate/>}/>
            <Route path="CreateQuestion" element={<CreateQuestion/>}/>
            <Route path="MyQuestions" element={<MyQuestions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );

  
}


export default App;
