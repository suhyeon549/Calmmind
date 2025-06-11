import React, { useState, useEffect, useRef } from "react";
import "./AnxietyPop.css"; 
import DearAnxiety from "./DearAnxiety";


const styles = {
  section: {
    backgroundColor: '#fbf9f4',
    color: '#2e2e2e',
    textAlign: 'center',
    padding: '8rem 2rem 4rem',
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
    borderRadius: '16px',
  },
  howToTitle: {
    fontSize: '1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#426d56',
  },
  howToList: {
    paddingLeft: '0',
    textAlign: 'center',
    listStylePosition: 'inside',
    lineHeight: '1.8',
    fontSize: '0.95rem',
    color: '#426d56',
    marginBottom: '1.5rem',
  },
  inputArea: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  input: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #92c3a8',
    backgroundColor: '#f1f6f2',
    color: '#2e2e2e',
    width: '250px',
  },
  button: {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#588d6d',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  bubbleSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
    gap: '1rem',
  },
  bubbleBox: {
    position: 'relative',
    height: '400px',
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#b5d5c4',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  bubble: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'black',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    cursor: 'pointer',
    position: 'absolute',
    transition: 'transform 0.2s ease',
  },
  routineSection: {
    marginTop: '8rem',
    textAlign: 'center',
  },
  routineTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#588d6d',
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
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '1rem',
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
}

};

const comfortingPhrases = [
  "괜찮아, 지금 이 순간도 지나갈 거야.",
  "너는 이미 충분히 잘하고 있어.",
  "하루하루 버티는 너를 응원해.",
  "마음껏 울어도 괜찮아. 그게 회복의 시작이야.",
  "천천히, 너의 속도로 가도 돼.",
];

const getRandomPhrase = () => {
  const index = Math.floor(Math.random() * comfortingPhrases.length);
  return comfortingPhrases[index];
};

const AnxietyPop = () => {
  const [inputValue, setInputValue] = useState("");
  const [bubbles, setBubbles] = useState([]);
  const [selectedStep, setSelectedStep] = useState(1);
  const [letter, setLetter] = useState('');
  const [released, setReleased] = useState(false);
  const [phrase, setPhrase] = useState('');
  const boxRef = useRef(null);

  const routineTexts = [
    "1단계: 잠시 눈을 감고 3번 깊게 숨을 들이마시고 내쉬세요.",
    "2단계: 창문을 열고 바깥 공기나 햇빛을 1분간 느껴보세요.",
    "3단계: 가까운 공원이나 자연이 있는 장소에서 10분간 걷기.",
    "4단계: 좋아하는 따뜻한 음료를 마시며 조용한 음악을 틀어보세요.",
    "5단계: 손글씨로 오늘 느낀 감정을 짧게 적어보세요.",
  ];

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newBubble = {
      id: Date.now(),
      text: inputValue,
      x: Math.random() * 80,
      y: Math.random() * 80,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    };
    setBubbles(prev => [...prev, newBubble]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const updatePositions = () => {
    setBubbles(prev =>
      prev.map(b => {
        let newX = b.x + b.dx;
        let newY = b.y + b.dy;
        if (newX < 0 || newX > 90) b.dx *= -1;
        if (newY < 0 || newY > 90) b.dy *= -1;
        return { ...b, x: newX, y: newY };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updatePositions, 30);
    return () => clearInterval(interval);
  }, []);

  const handleRemove = (id) => {
    const el = document.getElementById(`bubble-${id}`);
    if (el) {
      el.style.transform = "scale(1.6)";
      el.style.opacity = "0";
      el.style.transition = "all 0.4s ease";
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== id));
      }, 400);
    }
  };

  const handleRelease = () => {
    setReleased(true);
    setPhrase(getRandomPhrase());
  };

  const handleRetry = () => {
    setLetter('');
    setReleased(false);
    setPhrase('');
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>01</p>
      <h1 style={styles.mainTitle}>Anxiety Pop</h1>
      <h2 style={styles.subtitle}>불안 요소 터뜨리기</h2>
      <p style={styles.description}>
        “내가 느끼는 불안을 시각화하고, 클릭하며 해소해보세요.”
      </p>

      <div style={styles.howToBox}>
        <h3 style={styles.howToTitle}>HOW TO</h3>
        <ol style={styles.howToList}>
          <li>입력창에 요즘 내가 느끼는 불안 요소들을 입력하세요.</li>
          <li>다 입력하고 난 뒤, 시각화된 불안 요소들을 바라보는 시간을 가져보세요.</li>
          <li>불안 요소를 클릭하여 제거해보세요.</li>
          <li>그렇게, 마음속 짐 하나를 조금 덜어보세요.</li>
        </ol>
      </div>

      <section style={styles.bubbleSectionWrapper}>
        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="불안 요소를 입력해보세요."
            style={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button style={styles.button} onClick={handleAdd}>확인</button>
        </div>

        <div style={styles.bubbleBox} ref={boxRef}>
          {bubbles.map((b) => (
            <div
              key={b.id}
              id={`bubble-${b.id}`}
              onClick={() => handleRemove(b.id)}
              style={{
                ...styles.bubble,
                top: `${b.y}%`,
                left: `${b.x}%`
              }}
            >
              {b.text}
            </div>
          ))}
        </div>
      </section>


   {/*앞 섹션과 간격 조금만 벌리기 */}
      <div style={{ marginTop: '8rem' }}>
        <DearAnxiety />
      </div>
    

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
                color: selectedStep === n ? '#fff' : '#222',
              }}
              onClick={() => setSelectedStep(n)}
            >
              {`${n}st`.replace('1st', '1st').replace('2st', '2nd').replace('3st', '3rd').replace('4st', '4th').replace('5st', '5th')}
            </button>
          ))}
        </div>

        <div style={{
          ...styles.routineBox,
          backgroundColor: `rgba(88, 141, 109, ${0.05 + selectedStep * 0.1})`,
        }}>
          <p>{routineTexts[selectedStep - 1]}</p>
        </div>
      </section>
    </section>
  );
};

export default AnxietyPop;
