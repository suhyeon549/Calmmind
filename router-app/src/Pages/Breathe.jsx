import React, { useState, useEffect } from 'react';
import RecordModal from './RecordModal'; 
import CheckIntroAndTest from './CheckIntroAndTest';

const howToList = [
  '화면의 원에 맞춰 천천히 숨을 들이쉬고 내쉬어 보세요.',
  '숨이 들어오고 나가는 감각만을 온전히 집중해 보세요.',
  '들숨과 날숨을 느끼며 감정을 가만히 관찰해보세요.'
];

const routineTexts = [
  '1단계: 가볍게 몸 풀기 스트레칭',
  '2단계: 눈 감고 1분 동안 주변 소리 듣기',
  '3단계: 손바닥에 따뜻한 물 얹기',
  '4단계: 오늘 감정을 단어 하나로 적어보기',
  '5단계: 천천히 물 한잔 마시기'
];

const phaseDurations = {
  inhale: 4,
  hold: 7,
  exhale: 8
};

const Breathe = () => {
  const [phase, setPhase] = useState('ready');
  const [selectedStep, setSelectedStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [scale, setScale] = useState(1);

  const [showRecordModal, setShowRecordModal] = useState(false);
  const [depressionRecords, setDepressionRecords] = useState([]);
  const [anxietyRecords, setAnxietyRecords] = useState([]);


  // 기록 불러오기
  useEffect(() => {
    const savedDepressionRecords = JSON.parse(localStorage.getItem('depressionTestRecords')) || [];
    const savedAnxietyRecords = JSON.parse(localStorage.getItem('anxietyTestRecords')) || [];

    setDepressionRecords(savedDepressionRecords);
    setAnxietyRecords(savedAnxietyRecords);
  }, []);


  // breathing animation
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (isRunning && phase !== 'ready') {
        const duration = phaseDurations[phase] * 1000;
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const max = 1.4;
        const min = 0.8;
        const nextScale =
          phase === 'inhale'
            ? min + (max - min) * progress
            : phase === 'exhale'
            ? max - (max - min) * progress
            : 1.2;

        setScale(nextScale);
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isRunning && phase !== 'ready') {
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isRunning, phase, startTime]);

  // phase 전환
  useEffect(() => {
    if (!isRunning || phase === 'ready') return;
    if (timeLeft === 0) {
      const next = phase === 'inhale' ? 'hold' : phase === 'hold' ? 'exhale' : 'inhale';
      setPhase(next);
      setTimeLeft(phaseDurations[next]);
      setStartTime(Date.now());
    } else {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isRunning, phase]);

  const toggleBreathing = () => {
    if (isRunning) {
      setIsRunning(false);
      setPhase('ready');
      setTimeLeft(0);
      setScale(1);
    } else {
      setIsRunning(true);
      setPhase('inhale');
      setTimeLeft(phaseDurations['inhale']);
      setStartTime(Date.now());
    }
  };

  const phaseColors = {
    ready: '#ccc',
    inhale: '#cce8db',
    hold: '#b0dac7',
    exhale: '#98cbb3'
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>04</p>
      <h1 style={styles.mainTitle}>Breathe</h1>
      <h2 style={styles.subtitle}>호흡 명상</h2>
      <p style={styles.description}>
        “4초 들이쉬고, 7초 멈추고, 8초 내쉬는 4-7-8 호흡법으로<br />천천히 마음을 안정시켜 보세요.”
      </p>

      <div style={styles.howToBox}>
        <h3 style={styles.howToTitle}>HOW TO</h3>
        <ol style={styles.howToList}>
          {howToList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div style={styles.breathWrapper}>
        <button onClick={toggleBreathing} style={styles.makeButton}>
          {isRunning ? 'Stop' : 'Start'}
        </button>

        <div style={styles.circleBox}>
          <div
            style={{
              ...styles.breathCircle,
              backgroundColor: phaseColors[phase],
              transform: `scale(${scale})`,
              transition: 'transform 0.05s linear, background-color 0.5s ease-in-out'
            }}
          >
            <span style={styles.circleText}>
              {phase === 'ready' ? 'Start' : `${phase.charAt(0).toUpperCase() + phase.slice(1)}\n${timeLeft}s`}
            </span>
          </div>
        </div>

      </div>

      {/* 기록 모달 */}
{showRecordModal && (
  <RecordModal
    depressionRecords={depressionRecords}
    anxietyRecords={anxietyRecords}
    onClose={() => setShowRecordModal(false)}
    onDelete={(type, updatedRecords) => {
      if (type === 'depression') {
        setDepressionRecords(updatedRecords);
        localStorage.setItem('depressionTestRecords', JSON.stringify(updatedRecords));
      } else {
        setAnxietyRecords(updatedRecords);
        localStorage.setItem('anxietyTestRecords', JSON.stringify(updatedRecords));
      }
    }}
  />
)}




     
      <CheckIntroAndTest />

        <button style={styles.makeButton} onClick={() => setShowRecordModal(true)}>기록</button>

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
    color: '#2e2e2e',
  },
  step: {
    fontSize: '1rem',
    color: '#588d6d',
    marginBottom: '0.5rem'
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: '0',
    color: '#588d6d'
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#426d56',
    marginTop: '0.5rem',
    marginBottom: '2rem'
  },
  description: {
    fontSize: '1.4rem',
    color: '#365b47',
    marginTop: '3rem',
    marginBottom: '4rem'
  },
  howToBox: {
    backgroundColor: '#f3f0eb',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left'
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
  breathCircle: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleText: {
    fontSize: '1.4rem',
    fontWeight: 500,
    whiteSpace: 'pre-line'
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
    lineHeight: '1.6'
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
    backgroundColor: '#f1f6f2'
  },
  stepButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    marginBottom: '2rem'
  },
  stepButton: {
    padding: '0.4rem 0.9rem',
    borderRadius: '999px',
    border: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  breathWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6rem',
    marginBottom: '5rem',
    gap: '2rem'
  },
  circleBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6rem',
    marginBottom: '6rem',
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
  },
   routineSection: {
    marginTop: '8rem',
    textAlign: 'center',
  }
};

export default Breathe;
