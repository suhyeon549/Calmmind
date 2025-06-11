// src/Pages/AnxietyTestPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnxietyTestPage = () => {
  const navigate = useNavigate();
  const questions = [
    '1. 가끔 몸이 저리고 쑤시며 감각이 마비된 느낌을 받는다.',
    '2. 흥분된 느낌을 받는다.',
    '3. 가끔씩 다리가 떨리곤 한다.',
    '4. 편안하게 쉴 수가 없다.',
    '5. 매우 나쁜 일이 일어날 것 같은 두려움을 느낀다.',
    '6. 어지러움(현기증)을 느낀다.',
    '7. 가끔씩 심장이 두근거리고 빨리 뛴다.',
    '8. 침착하지 못하다.',
    '9. 자주 겁을 먹고 무서움을 느낀다.',
    '10. 신경이 과민되어 있다.',
    '11. 가끔씩 숨이 막히고 질식할 것 같다.',
    '12. 자주 손이 떨린다.',
    '13. 안절부절 못한다.',
    '14. 미칠 것 같은 두려움을 느낀다.',
    '15. 가끔씩 숨쉬기가 곤란할 때가 있다.',
    '16. 죽을 것 같은 두려움을 느낀다.',
    '17. 불안한 상태에 있다.',
    '18. 자주 소화가 안되고 뱃속이 불편하다.',
    '19. 가끔씩 기절할 것 같다.',
    '20. 자주 얼굴이 붉어지곤 한다.',
    '21. 땀을 많이 흘린다.'
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const unanswered = answers
      .map((answer, index) => (answer === null ? index + 1 : null))
      .filter((val) => val !== null);

    if (unanswered.length > 0) {
      setErrorMsg(`${unanswered.join(', ')}번 문항을 체크해주세요.`);
      return;
    }

    const totalScore = answers.reduce((sum, ans) => sum + ans, 0);

    navigate('/selfcheck/anxiety/result', { state: { totalScore } });
  };

  return (
    <section style={styles.section}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>←</button>
      <h1 style={styles.mainTitle}>불안감 자가진단 테스트</h1>
      <p style={styles.description}>"스스로를 돌보는 첫 걸음, 지금 내 마음을 살펴볼까요?"</p>

      <div style={styles.testBox}>
        <div style={styles.testHeader}>
          <div style={styles.questionHeader}>문항</div>
          {['전혀 아니다', '조금 느꼈다', '상당히 느꼈다', '심하게 느꼈다'].map((label, index) => (
            <div key={index} style={styles.answerHeaderWithCircle}>
              <div style={styles.answerLabel}>{label}</div>
            </div>
          ))}
        </div>

        {questions.map((q, qi) => (
          <div key={qi} style={styles.testRow}>
            <div style={styles.questionCell}>{q}</div>
            {[0, 1, 2, 3].map((ai) => (
              <div key={ai} style={styles.answerHeaderWithCircle}>
                <div style={styles.answerLabel}></div>
                <div
                  style={{
                    ...styles.answerCircle,
                    backgroundColor: answers[qi] === ai ? '#588d6d' : '#fff',
                    border: '2px solid #ccc',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleSelect(qi, ai)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {errorMsg && (
        <p style={styles.routineSub}>{errorMsg}</p>
      )}

      <button style={styles.makeButton} onClick={handleSubmit}>완료</button>
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
  backButton: {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: '0',
    color: '#588d6d'
  },
  description: {
    fontSize: '1.4rem',
    color: '#365b47',
    marginTop: '3rem',
    marginBottom: '4rem'
  },
  testBox: {
    backgroundColor: '#f3f0eb',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: '800px',
    margin: '2rem auto',
    textAlign: 'left',
  },
 testHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#365b47',
  },
  questionHeader: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginRight: '5rem',
  },
  testRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  questionCell: {
    flex: 2,
    fontSize: '1rem',
    marginRight: '5rem',
    marginLeft: '1rem',
  },
  answerHeaderWithCircle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 0',
  },
  answerLabel: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: '#426d56',
    marginRight: '0.5rem',
  },
  answerCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'inline-block'
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer'
  },
  routineSub: {
    fontSize: '1rem',
    color: '#426d56',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  }
};

export default AnxietyTestPage;
