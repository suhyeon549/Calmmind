import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RecordModal from './RecordModal';

const DepressionResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalScore } = location.state || { totalScore: 0 };

  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [showAlreadySavedMessage, setShowAlreadySavedMessage] = useState(false);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [depressionRecords, setDepressionRecords] = useState([]);
  const [anxietyRecords, setAnxietyRecords] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const depression = JSON.parse(localStorage.getItem('depressionTestRecords')) || [];
    const anxiety = JSON.parse(localStorage.getItem('anxietyTestRecords')) || [];
    setDepressionRecords(depression);
    setAnxietyRecords(anxiety);
  }, []);

  const getStatus = () => {
    if (totalScore <= 15) {
      return '때때로 일상 속에서 기분이 나빠질 수 있지만, 우울한 상태는 아닙니다. 기분좋은 일을 하면서 기분을 전환해 보세요.';
    } else if (totalScore <= 20) {
      return '살짝 기분이 가라앉아있는 상태입니다. 이러한 기분이 지속될 시 전문가와 상담해보세요.';
    } else {
      return '임상적인 수준에서 우울증을 의심해볼 수 있는 상태입니다. 전문가와 의논을 통해 도움을 받는 것이 필요합니다.';
    }
  };

  const handleSave = () => {
    if (isSaved) {
      setShowAlreadySavedMessage(true);
      setTimeout(() => setShowAlreadySavedMessage(false), 3000);
      return;
    }

    const savedRecords = JSON.parse(localStorage.getItem('depressionTestRecords')) || [];
    const today = new Date();
    const newRecord = {
      score: totalScore,
      status: getStatus(),
      date: today.toISOString().split('T')[0]
    };

    const updatedRecords = [...savedRecords, newRecord];
    localStorage.setItem('depressionTestRecords', JSON.stringify(updatedRecords));
    setDepressionRecords(updatedRecords);

    setIsSaved(true);
    setShowSavedMessage(true);
  };

  const handleOpenRecordModal = () => {
    const depression = JSON.parse(localStorage.getItem('depressionTestRecords')) || [];
    const anxiety = JSON.parse(localStorage.getItem('anxietyTestRecords')) || [];
    setDepressionRecords(depression);
    setAnxietyRecords(anxiety);
    setShowRecordModal(true);
  };

  return (
    <section style={styles.section}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>←</button>
      <h1 style={styles.mainTitle}>우울감 자가진단 테스트</h1>
      <p style={styles.description}>결과</p>

      <div style={styles.resultBox}>
        <p>총점: {totalScore}점</p>
        <p style={styles.resultText}>{getStatus()}</p>
      </div>

      {(showSavedMessage || showAlreadySavedMessage) && (
        <p style={styles.routineSub}>
          {showAlreadySavedMessage ? '이미 저장되었습니다.' : '저장되었습니다. \'기록\'에서 확인해보세요.'}
        </p>
      )}

      <div style={styles.buttonGroup}>
        <button style={styles.makeButton} onClick={handleSave}>저장</button>
        <button style={styles.makeButton} onClick={handleOpenRecordModal}>기록</button>
      </div>

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
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '8rem 2rem 4rem',
    backgroundColor: '#fbf9f4',
    color: '#2e2e2e',
    minHeight: '100vh'
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
    fontSize: '2rem',
    color: '#365b47',
    marginTop: '3rem',
    marginBottom: '2rem',
    fontWeight: 600,
  },
  resultBox: {
    backgroundColor: '#f3f0eb',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: '2rem auto',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#588d6d',
    textAlign : 'CENTER',
  },
  resultText: {
    marginTop: '1rem',
    lineHeight: '1.8',
    color: '#000',
    
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem'
  },
  routineSub: {
    fontSize: '1rem',
    color: '#426d56',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default DepressionResultPage;
