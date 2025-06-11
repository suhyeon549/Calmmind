import React, { useState } from 'react';
import ClassicQuoteSection from "./ClassicQuoteSection";

const copyTexts = [
  '작은 숨에도 오늘의 용기가 담겨 있어.',
  '당신은 이미 충분히 잘해오고 있어요.',
  '감정은 흘러가고, 나도 흘러가요.',
  '괜찮지 않아도 괜찮아요.',
  '오늘은 오늘의 속도로.',
  '어둠 속에도 빛은 자라고 있어.',
  '마음이 하는 말에 귀를 기울여보세요.',
  '불완전해도 괜찮아, 나니까.',
  '지금 이 순간에도 나는 나를 돌보고 있어.',
  '오늘도 살아줘서 고마워.',
  '있는 그대로의 나를 안아주세요.',
  '천천히 걸어도 괜찮아요, 멈추지만 않으면 돼요.',
  '잠시 멈춤도 성장의 일부야.',
  '지금의 느림도 나에게 필요한 시간이에요.',
  '한 걸음씩, 나의 속도로.',
  '눈을 감고 나를 들여다보는 시간.',
  '마음속 불안을 따뜻하게 안아보세요.',
  '삶은 완벽보다 진심이 더 중요해요.',
  '감정이 흐른다는 건 살아있다는 증거야.',
  '오늘의 무게도 결국 지나갈 거야.'
];

const routineTexts = [
  '1단계: 손목 풀어주는 스트레칭 하기',
  '2단계: 눈 감고 10초간 조용히 숨 고르기',
  '3단계: 좋아하는 펜으로 이름 써보기',
  '4단계: 창밖 바라보며 나를 칭찬하는 말 떠올리기',
  '5단계: 물 한 모금 마시며 여운 남기기'
];

const CopyCalm = () => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [selectedStep, setSelectedStep] = useState(1);

  const handleClick = () => {
    const random = copyTexts[Math.floor(Math.random() * copyTexts.length)];
    setText(random);
    setInput('');
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>05</p>
      <h1 style={styles.mainTitle}>Copy Calm</h1>
      <h2 style={styles.subtitle}>필사하기</h2>
      <p style={styles.description}>
        “짧은 문장을 따라 적으며 나를 다독이는 연습.<br />타자를 통해 마음을 정돈해보세요.”
      </p>

      <div style={styles.howToBox}>
        <h3 style={styles.howToTitle}>HOW TO</h3>
        <ol style={styles.howToList}>
          <li>‘make’ 버튼을 눌러 필사할 문장을 확인해보세요.</li>
          <li>회색 박스에 나오는 문장을 따라 입력해보세요.</li>
          <li>마음이 따라가는 대로 천천히 타이핑해보세요.</li>
        </ol>
      </div>

      <button onClick={handleClick} style={styles.makeButton}>Make</button>

      <div style={styles.typingBox}>
        {text && (
          <p style={styles.overlayText}>{text}</p>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=""
          style={styles.inputBox}
        />
      </div>

        < ClassicQuoteSection/>

      <section style={styles.routineSection}>
          <h2 style={styles.routineTitle}>What else?</h2>
          <p style={styles.routineSub}>
            “이제 화면을 벗어나, 몸으로 감정을 다독이는 시간, <br />
            작은 오프라인 루틴을 따라 해보세요.”
          </p>
  
          <div style={styles.stepButtons}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                style={{
                  ...styles.stepButton,
                  backgroundColor: selectedStep === n ? '#588d6d' : '#b5d5c4',
                  color: selectedStep === n ? '#fff' : '#222'
                }}
                onClick={() => setSelectedStep(n)}
              >
                {`${n}st`.replace('1st', '1st').replace('2st', '2nd').replace('3st', '3rd').replace('4st', '4th').replace('5st', '5th')}
              </button>
            ))}
          </div>
  
          <div style={{
            ...styles.routineBox,
            backgroundColor: `rgba(88, 141, 109, ${0.05 + selectedStep * 0.1})`
          }}>
            <p>{routineTexts[selectedStep - 1]}</p>
          </div>
        </section>
      </section>
    );
  };

const styles = {
  section: {
    textAlign: 'center',
    padding: '8rem 2rem 4rem',
    backgroundColor: '#fbf9f4',
    color: '#2e2e2e'
  },
  step: {
    fontSize: '1rem',
    color: '#588d6d',
    marginBottom: '0.5rem',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    margin: '0',
    color: '#588d6d',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#426d56',
    marginTop: '0.5rem',
    marginBottom: '2rem',
  },
  description: {
    fontSize: '1.4rem',
    color: '#365b47',
    marginTop: '3rem',
    marginBottom: '4rem',
  },
  howToBox: {
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: '#f3f0eb',
    padding: '2.5rem',
    borderRadius: '16px'
  },
  howToTitle: {
    fontSize: '1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#426d56'
  },
  howToList: {
    paddingLeft: '0',
    textAlign: 'center',
    listStylePosition: 'inside',
    lineHeight: '1.8',
    fontSize: '0.95rem',
    color: '#426d56',
    marginBottom: '1.5rem'
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    margin: '2rem 0 1rem'
  },
  typingBox: {
    width: '90%',
    maxWidth: '700px',
    margin: '25px auto',
    padding: '2rem',
    backgroundColor: '#E7F6E7',
    borderRadius: '16px',
    position: 'relative',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputBox: {
    width: '100%',
    fontSize: '1.1rem',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontWeight: '500',
    textAlign: 'left',
    zIndex: 2,
    position: 'relative',
    paddingLeft: '0.01rem'
  },
  overlayText: {
    position: 'absolute',
    fontSize: '1.1rem',
    color: '#888',
    opacity: 0.4,
    pointerEvents: 'none',
    whiteSpace: 'pre-wrap',
    zIndex: 1
  },
  routineSection: {
    marginTop: '8rem',
    textAlign: 'center',
  },
  routineTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#588d6d'
  },
  routineSub: {
    fontSize: '1rem',
    color: '#426d56',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  stepButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    marginBottom: '2rem',
  },
  stepButton: {
    padding: '0.4rem 0.9rem',
    borderRadius: '999px',
    border: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  routineBox: {
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    transition: 'background-color 0.4s ease',
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#222',
    backgroundColor: '#f1f6f2',
  }
};


export default CopyCalm;