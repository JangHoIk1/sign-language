import React from 'react';
import IntroSection from '../../component/main-home/IntroSection';
import Mean_signlanguage from '../../component/main-home/Mean_signlanguage';
import Feature from '../../component/main-home/Feature';
function Homepage() {
  // 홈 페이지 컴포넌트의 내용을 작성합니다.
  return (
    <div>
      <div>
        <IntroSection />
        <Mean_signlanguage />
        <Feature />
      </div>

       
    </div>
  );
}

export default Homepage;