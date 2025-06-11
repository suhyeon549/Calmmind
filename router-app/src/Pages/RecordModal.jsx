import React, { useState, useEffect } from 'react';

const RecordModal = ({ depressionRecords, anxietyRecords, onClose, onDelete }) => {
  const [activeTab, setActiveTab] = useState('depression');
  const [localDepressionRecords, setLocalDepressionRecords] = useState([]);
  const [localAnxietyRecords, setLocalAnxietyRecords] = useState([]);

  useEffect(() => {
    setLocalDepressionRecords(depressionRecords);
    setLocalAnxietyRecords(anxietyRecords);
  }, [depressionRecords, anxietyRecords]);

  const handleDelete = (index) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      if (activeTab === 'depression') {
        const updated = [...localDepressionRecords];
        updated.splice(index, 1);
        setLocalDepressionRecords(updated);
        localStorage.setItem('depressionTestRecords', JSON.stringify(updated));
        if (typeof onDelete === 'function') {
          onDelete('depression', updated);
        }
      } else {
        const updated = [...localAnxietyRecords];
        updated.splice(index, 1);
        setLocalAnxietyRecords(updated);
        localStorage.setItem('anxietyTestRecords', JSON.stringify(updated));
        if (typeof onDelete === 'function') {
          onDelete('anxiety', updated);
        }
      }
    }
  };

  const recordsToShow = activeTab === 'depression' ? localDepressionRecords : localAnxietyRecords;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <h2 style={styles.modalTitle}>상태 기록</h2>

        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.makeButton,
              padding: '0.6rem 1.6rem',
              fontSize: '1rem',
              backgroundColor: activeTab === 'depression' ? '#588d6d' : '#fff',
              color: activeTab === 'depression' ? '#fff' : '#222'
            }}
            onClick={() => setActiveTab('depression')}
          >
            우울감
          </button>

          <button
            style={{
              ...styles.makeButton,
              padding: '0.6rem 1.6rem',
              fontSize: '1rem',
              backgroundColor: activeTab === 'anxiety' ? '#588d6d' : '#fff',
              color: activeTab === 'anxiety' ? '#fff' : '#222'
            }}
            onClick={() => setActiveTab('anxiety')}
          >
            불안감
          </button>
        </div>

        {recordsToShow.length === 0 ? (
          <p style={styles.emptyText}>아직 저장된 기록이 없습니다.</p>
        ) : (
          recordsToShow.map((record, index) => (
            <div key={index} style={styles.recordRow}>
              <span
                style={styles.deleteButton}
                onClick={() => handleDelete(index)}
              >
                X
              </span>
              <div>{record.score}점 / {record.status}</div>
              <div style={{ marginLeft: '1.5rem' }}>{record.date}</div> 
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#E7F6E7',
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '700px',
    width: '90%',
    position: 'relative',
    color: '#000'
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: '1.2rem',
    border: 'none',
    background: 'none',
    color: '#588d6d',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  modalTitle: {
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#588d6d'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem'
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
  recordRow: {
    backgroundColor: '#fff',
    color: '#222',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    position: 'relative'
  },
  deleteButton: {
    color: '#588d6d',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginRight: '1rem'
  },
  emptyText: {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#588d6d'
  }
};

export default RecordModal;
