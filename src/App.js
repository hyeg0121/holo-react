import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from 'react-router-dom';

import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import CostCalculatorPage from "./pages/CostCalculatorPage";
import JoinPage from "./pages/JoinPage";
import ArticlePage from "./pages/ArticlePage";
import QnAPage from "./pages/QnAPage";
import AllQnABoardPage from "./pages/AllQnABoardPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/join"} element={<JoinPage/>}/>
                <Route path={"/costCalculator"} element={<CostCalculatorPage/>}/>
                <Route path={"/articles"} element={<ArticlePage/>}/>
                <Route path={"/qna"} element={<QnAPage />} />
                <Route path={"/qna/all"} element={<AllQnABoardPage />} />
            </Routes>
        </Router>
    );
}

export default App;
