import React from 'react';
import './Feature.css';
import callImage from '../../image/call.png';
import studyImage from '../../image/study.jpg';

function FeaturePage() {
  return (
    <div className="feature-container">
      <h1>홈페이지 기능 소개</h1>
      <div className="feature-item">
        <div className="feature-image">
          <img
            src={callImage} // 이미지 URL
            alt="Feature Image"
          />
        </div>
        <div className="feature-description">
          <h2>실시간 수화 번역을 이용한 통화 기능</h2>
          <p>
            기능에 대한 설명 텍스트를 이 곳에 추가합니다.
            이 기능은 이런 점이 특별하고 유용합니다.
          </p>
        </div>
        <div className="feature-link">
          <a href="#">바로가기</a>
          {/* // 바로가기 부분 LINK로 수정필요 */}
        </div>
      </div>
      
      <div className="feature-item">
      <div className="feature-description">
          <h2>수화 학습 기능</h2>
          <p>
            기능에 대한 설명 텍스트를 이 곳에 추가합니다.
            이 기능은 이런 점이 특별하고 유용합니다.
          </p>
        </div>
        <div className="feature-link"> 
          <a href="#">바로가기</a> 
          {/* // 바로가기 부분 LINK로 수정필요 */}
        </div>
        <div className="feature-image">
          <img
            src={studyImage} // 이미지 URL
            alt="Feature Image"
          />
        </div>

      </div>
    </div>
  );
}

export default FeaturePage;