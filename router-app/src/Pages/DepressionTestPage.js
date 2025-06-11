import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DepressionTestPage = () => {
  const navigate = useNavigate();

  const questions = [
    '평소에는 아무렇지도 않던 일들이 괴롭고 귀찮게 느껴졌다.',
    '먹고 싶지 않고, 식욕이 없었다.',
    '어느 누가 도와준다 하더라도, 나의 울적한 기분을 떨쳐 버릴 수 없을 것 같았다.',
    '무슨 일을 하든 정신을 집중하기가 힘들었다.',
    '비교적 잘 지냈다.',
    '상당히 우울했다.',
    '모든 일들이 힘들게 느껴졌다.',
    '앞 일이 암담하게 느껴졌다.',
    '지금까지의 내 인생은 실패작이라는 생각이 들었다.',
    '적어도 보통 사람들만큼의 능력은 있었다고 생각한다.',
    '잠을 설쳤다(잠을 잘 이루지 못했다).',
    '두려움을 느꼈다.',
    '평소에 비해 말수가 적었다.',
    '세상에 홀로 있는 듯한 외로움을 느꼈다.',
    '큰 불만없이 생활했다.',
    '사람들이 나에게 차갑게 대하는 것 같았다.',
    '갑자기 울음이 나왔다.',
    '마음이 슬펐다.',
    '사람들이 나를 싫어하는 것 같았다.',
    '도무지 뭘 해 나갈 엄두가 나지 않았다.'
  ];

  const scoreMapping = [0, 1, 2, 3]; // 원에 해당하는 점수
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [missingMessage, setMissingMessage] = useState('');

  const handleSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const missing = answers
      .map((answer, index) => (answer === null ? index + 1 : null))
      .filter((n) => n !== null);

    if (missing.length > 0) {
      setMissingMessage(`${missing.join(', ')}번 문항을 체크해주세요.`);
    } else {
      // 점수 계산
      const totalScore = answers.reduce((sum, a) => sum + scoreMapping[a], 0);

      // 결과 페이지로 이동 (state로 총점 전달)
      navigate('/selfcheck/depression/result', { state: { totalScore } });
    }
  };

  return (
    <section style={styles.section}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>←</button>
      <h1 style={styles.mainTitle}>우울감 자가진단 테스트</h1>
      <p style={styles.description}>"스스로를 돌보는 첫 걸음, 지금 내 마음을 살펴볼까요?"</p>

      <div style={styles.testBox}>
        <div style={styles.testHeader}>
          <div style={styles.questionHeader}>문항</div>
          {['1일 이하', '1 ~ 2일', '3 ~ 4일', '5일 이상'].map((label, index) => (
            <div key={index} style={styles.answerHeaderWithCircle}>
              <div style={styles.answerLabel}>{label}</div>
            </div>
          ))}
        </div>

        {questions.map((q, qi) => (
          <div key={qi} style={styles.testRow}>
            <div style={styles.questionCell}>{`${qi + 1}. ${q}`}</div>
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

      {missingMessage && <p style={styles.routineSub}>{missingMessage}</p>}

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
    maxWidth: '900px',
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
    fontSize: '1.2rem',
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
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#426d56',
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
    cursor: 'pointer',
    marginTop: '2rem'
  },
  routineSub: {
    fontSize: '1rem',
    color: '#426d56',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
};

export default DepressionTestPage;
