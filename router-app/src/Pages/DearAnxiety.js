import React, { useState, useEffect } from "react";
import "./AnxietyPop.css";

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
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '1.5rem'
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
    alignItems: 'flex-start',
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
  paddingLeft: '0.01rem',
  resize: 'none',
  lineHeight: '1.6',
  overflow: 'auto',
  minHeight: '1.5em',
  fontFamily: '"Noto Sans KR", sans-serif'
}

};

const comfortingPhrases = [
  "괜찮아, 지금 이 순간도 지나갈 거야.",
  "너는 이미 충분히 잘하고 있어.",
  "하루하루 버티는 너를 응원해.",
  "마음껏 울어도 괜찮아. 그게 회복의 시작이야.",
  "천천히, 너의 속도로 가도 돼."
];

const getRandomPhrase = () => {
  const index = Math.floor(Math.random() * comfortingPhrases.length);
  return comfortingPhrases[index];
};

const DearAnxiety = () => {
  const [letter, setLetter] = useState('');
  const [released, setReleased] = useState(false);
  const [phrase, setPhrase] = useState('');

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
    <section style={{ marginTop: '6rem', textAlign: 'center' }}>
      <p style={styles.step}>BONUS</p>
      <h1 style={styles.mainTitle}>Dear Anxiety...</h1>
      <h2 style={styles.subtitle}>불안에게 보내는 편지</h2>
      <p style={styles.description}>
        "지금 떠오르는 생각을 글로 적어보고, <br />
        위로의 말을 받아보세요."
      </p>

      <div style={styles.typingBox}>
        {!released ? (
        <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            style={styles.inputBox}
            placeholder="불안한 마음을 적어보세요..."
        />
        ) : (
        <p className="comforting-fadein">{phrase}</p>
        )}

      </div>

      {!released ? (
        <button
          onClick={handleRelease}
          style={styles.makeButton}
          disabled={!letter.trim()}
        >
          Release
        </button>
      ) : (
        <button
          onClick={handleRetry}
          style={styles.makeButton}
        >
          ⟲
        </button>
      )}
    </section>
  );
};

export default DearAnxiety;
