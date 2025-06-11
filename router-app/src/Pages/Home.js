import React from "react";
import './Home.css';

const Home = () => {
    return (
        <>
        <section className="video-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
          >
            <source src={process.env.PUBLIC_URL + "/Videos/Main_Video_RE.mp4"} type="video/mp4" />

          </video>
      
          <div className="overlay-text red-hat-display">
            <p>DIGITAL</p>
            <p>THERAPY</p>
            <div className="subtitle">
              <h5>“오늘, 당신의 마음은 어떤가요?”</h5>
              <h5>감정을 정리하는 5가지 체험을 만나보세요.</h5>
            </div>
          </div>
        </section>
      
        <section className="divider-section"></section>
      
        <section className="color-section">
          <p>이곳은, 당신의 감정이 잠시 쉬어가는 곳입니다.  <br />
          어지러운 마음을 잠시 내려두고, 나를 천천히 들여다보는 시간.  <br /><br />
          회복 루틴을 하나씩 만나보세요.</p>
        </section>

        
        <section className="footer-video-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="footer-video"
          >
            <source src={process.env.PUBLIC_URL + "/Videos/Main_Video_2_RE.mp4"} type="video/mp4" />

          </video>
          <div className="footer-overlay">
            <h2>Digital Therapy</h2>
            <div>
              <p>:</p>
              <p>화면 속에서 만나는</p>
              <p>감정의 휴식</p>
            </div>
          </div>
        </section>
        </>
    );
};

export default Home;
