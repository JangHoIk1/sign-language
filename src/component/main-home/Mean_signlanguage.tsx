import React from 'react';
import './Mean_signlanguage.css'; 
import meanImage from '../../image/mean.png';

function Mean_signlanguage() {
  return (
    <div className="mean-signlanguage-container">
      <div className="mean-signlanguage-image">
        <img
          src={meanImage}
          alt="Sign Language Image"
        />
      </div>
      <div className="mean-signlanguage-description">
        <h3>수어의 의미</h3>
        <p>
          청각장애인들은 소리로 말을 배울 수 없어서 ‘보이는 언어’를 사용합니다. 이 ‘보이는 언어’가 바로 ‘수어 (手語, Sign language)’입니다.
          이처럼 수어를 일상어로 사용하는 사람을 ‘농인’이라고 부르는데, ‘한국수화언어법’에 따르면 ‘한국수어’는 ‘한국수화언어’를 줄인 말로, 한국어나 영어와 같은 독립된 언어라는 의미를 담고 있습니다. 한국수어는 한국어와는 문법 체계가 다른, 대한민국 농인의 고유한 언어이다.
        </p>
      </div>
    </div>
  );
}

export default Mean_signlanguage;