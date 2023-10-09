import React, { useState } from 'react';
import './RegistrationForm.css';
import { Container } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm: React.FC = () => { // : React.FC는 이 컴포넌트가 함수형 컴포넌트임을 나타내며, React.FC 타입을 사용하겠다는 것을 의미. 함수형 컴포넌트는 함수로서 컴포넌트를 정의하고 반환
  const [formData, setFormData] = useState({ // useState는 React에서 상태를 생성하고 업데이트 하는데 사용 
    name: '',     // formData라는 상태 변수와 이를 업데이트할 수 있는 setFormData 함수를 생성
    email: '',
    password: '',
    isDeaf: false,
  });

const apiUrl = '/api/register'; // 여기다가 백엔드 회원가입 엔드포인트 ? 넣기
const jsonData = JSON.stringify(formData); // formData값들 jsonData로

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    try {
      // 데이터 처리를 수행하는 비동기 작업
      // 예: const response = await axios.post('/api/register', formData);

      // 데이터 처리가 성공시
      console.log("Registration successful.");
      // 폼 데이터를 초기화
      setFormData({
        name: '',
        email: '',
        password: '',
        isDeaf: false,
      });
    } catch (error) {
      // 데이터 처리가 실패시
      console.error("Registration failed:", error);
    }
  };



  axios.post(apiUrl, jsonData, {
    headers: {
      'Content-Type': 'application/json' // JSON 형식으로 데이터 전송을 설정
    }
  })
    .then((response) => {
      // 성공 처리
      console.log('회원가입 성공:', response.data);
    })
    .catch((error) => {
      // 오류 처리
      console.error('회원가입 오류:', error);
    });
  

  return (

    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="isDeaf">농인</label>
        <input
          type="checkbox"
          id="isDeaf"
          name="isDeaf"
          checked={formData.isDeaf}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={() => { }
      }>Register</button>
    </form>

  );

};

export default RegistrationForm;