import React, { useState } from "react";

const styles = {
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
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#222',
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    margin: '3rem 0'
  }
};

const relaxationActivities = [
  "따뜻한 차 한 잔 마시기",
  "창밖 풍경 바라보기",
  "심호흡 5회 천천히 하기",
  "편안한 자세로 스트레칭 하기",
  "조용한 음악 틀고 눈 감기",
  "가벼운 산책하기",
  "햇살 드는 곳에서 앉아 있기",
  "식물에 물 주기",
  "좋아하는 향 초 켜기",
  "손 마사지 하기",
  "기분 좋아지는 사진 보기",
  "종이와 펜으로 아무거나 그려보기",
  "따뜻한 물로 손 씻기",
  "아로마 오일 향 맡기",
  "좋아하는 책 한 페이지 읽기",
  "구름 모양 관찰하기",
  "조용한 공간에서 3분간 앉아 있기",
  "베개 껴안고 잠시 눈 감기",
  "포근한 담요 덮고 쉬기",
  "오늘 감사한 일 1가지 떠올리기"
];

const NatureRelaxActivity = () => {
  const [activity, setActivity] = useState('');
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    const index = Math.floor(Math.random() * relaxationActivities.length);
    setActivity(relaxationActivities[index]);
    setStarted(true);
  };

  return (
    <section style={{ marginTop: '6rem', textAlign: 'center' }}>
      <p style={styles.step}>BONUS</p>
      <h1 style={styles.mainTitle}>Relax with Nature</h1>
        <h2 style={styles.subtitle}>자연과 함께 하는 작은 휴식</h2>
      <p style={styles.description}>
        “자연의 소리와 함께, 몸과 마음을 풀어주는 작은 행동을 따라 해보세요.”
      </p>    


    <div style={styles.typingBox}>
      {activity ? (
        <p>{activity}</p>
      ) : (
        <p style={{ color: '#888' }}>'make'버튼을 눌러 자연 소리를 들으며 할 수 있는 활동을 확인해보세요.</p>
      )}
    </div>


      <button onClick={handleClick} style={styles.makeButton}>
        {started ? '⟲' : 'Make'}
      </button>
    </section>
  );
};

export default NatureRelaxActivity;
