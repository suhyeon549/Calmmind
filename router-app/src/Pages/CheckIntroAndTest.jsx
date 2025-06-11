import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckIntroAndTest = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <p style={styles.step}>BONUS</p>
      <h1 style={styles.mainTitle}>Mind Check</h1>
      <h2 style={styles.subtitle}>마음 자가진단</h2>
      <p style={styles.description}>
        "간단한 자가진단 테스트로 현재 나의 마음 상태를 확인해보세요."
      </p>

      <div style={styles.buttonRow}>
        <button
          style={styles.circleButton}
          onClick={() => navigate('/selfcheck/depression')}
        >
          우울감<br />자가진단<br />→
        </button>

        <button
          style={styles.circleButton}
          onClick={() => navigate('/selfcheck/anxiety')}
        >
          불안감<br />자가진단<br />→
        </button>
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    backgroundColor: '#fbf9f4',
    color: '#2e2e2e',
    padding: '0rem 4rem',
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
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '4rem',
  },
  circleButton: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    backgroundColor: '#E7F6E7',
    border: '2px solid #426d56',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1.4',
    marginBottom: '5rem',
    color: '#426d56',
  },
};

export default CheckIntroAndTest;
