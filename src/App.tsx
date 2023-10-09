import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './component/header/Header'; // 헤더 컴포넌트
import Footer from './component/footer/Footer';
import Homepage from './pages/HomePage/Homepage'; // 홈 페이지 컴포넌트
import Teampage from './pages/Teampage/Teampage'; // 팀 페이지 컴포넌트
import Callpage from './pages/CallPage/Callpage'; // 홈 페이지 컴포넌트
import Studypage from './pages/StudyPage/Studypage';
import RegistrationForm from './component/Login/RegistrationForm';

import { useNavigate } from 'react-router-dom'; // V6미만은 useHistory에서 -> V6 useNavigate로 바뀜

function App() {
  return (
    
    <Router>
    <div className="App">
      <Header /> {/*헤더는 모든 부분에 나와야하니 그다음을 switch로 감싸줌*/}

      <Routes>
      <Route path="/" element={<Homepage />} /> {/* Homepage 컴포넌트를 이렇게 렌더링 */}
      <Route path="/callpage" element={<Callpage />} /> {/* Homepage 컴포넌트를 이렇게 렌더링 */}
      <Route path="/studypage" element={<Studypage />} /> {/* Homepage 컴포넌트를 이렇게 렌더링 */}
      <Route path="/teampage" element={<Teampage />} /> {/* Homepage 컴`포넌트를 이렇게 렌더링 */}
      <Route path="/RegistrationForm" element={<RegistrationForm />} /> 
      {/* <Route path="/SignUp/Login" element={<Login />} /> SignupForm 컴포넌트 연결 */}
      
      </Routes>

      <Footer />
    

    </div>
    </Router>
  );
}

export default App;
