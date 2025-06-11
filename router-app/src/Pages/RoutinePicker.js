import React, { useState } from 'react';
import LuckyCardPicker from "./LuckyCardPicker";

const senses = ['시각', '청각', '촉각', '후각', '미각'];
const places = [ '창가', '공원', '카페', '도서관', '해변', '산책로', '강가', '옥상',
    '정원', '호수', '산속', '바닷가', '숲속', '테라스', '베란다', '서재',
    '거실', '침실', '작업실', '서점', '미술관', '박물관', '영화관', '음악홀',
    '극장', '운동장', '체육관', '사우나' ];
const actions = [ '따뜻한 차 마시기', '조용히 앉아 있기', '창밖 바라보기', '심호흡하기',
  '산책하기', '음악 듣기', '책 읽기', '일기 쓰기',
  '명상하기', '요가하기', '식물 돌보기', '반려동물 쓰다듬기',
  '뜨거운 샤워하기', '손 마사지하기', '목욕하기', '캔들 켜기',
  '좋아하는 영화 보기', '퍼즐 맞추기', '그림 그리기', '사진 정리하기',
  '정리정돈하기', '요리하기', '편지 쓰기', '감사일기 쓰기',
  '자연 소리 듣기', '좋아하는 향기 맡기', '편안한 옷 입기', '햇빛 쬐기'];

const routineTexts = [
  '1단계: 스트레칭 5분 하기 – 몸의 긴장을 풀어보세요.',
  '2단계: 종이에 오늘 기분을 낙서로 표현해보세요.',
  '3단계: 가볍게 햇빛 아래 걷기 – 햇살을 느껴보세요.',
  '4단계: 감정 색깔로 오늘 기분을 칠해보세요.',
  '5단계: 가만히 숨을 들이마시고 내쉬어보세요.'
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const RoutinePicker = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedStep, setSelectedStep] = useState(1);

  const handleClick = () => {
    const place = getRandomItem(places);
    const action = getRandomItem(actions);
    const sense = getRandomItem(senses);
    setMessage(`<strong>${place}</strong>에서 <strong>${action}</strong> 하며 <strong>${sense}</strong>에 집중해보세요.`);
    setOpen(true);
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>03</p>
      <h1 style={styles.mainTitle}>Routine Picker</h1>
      <h2 style={styles.subtitle}>나만의 힐링 루틴 만들기</h2>
      <p style={styles.description}>
        “그날그날 쉽게 따라할 수 있는<br />나만의 랜덤 힐링 루틴을 뽑아보세요”
      </p>

      <div style={styles.howToBox}>
        <h3 style={styles.howToTitle}>HOW TO</h3>
        <ol style={styles.howToList}>
          <li>‘make’ 버튼을 누르세요.</li>
          <li>랜덤으로 뽑힌 힐링 루틴을 확인해보세요.</li>
          <li>잠시 멈추고 그 루틴을 상상하며 따라 해보세요.</li>
        </ol>
      </div>

      <button onClick={handleClick} style={styles.makeButton}>Make</button>

      <div style={{
        ...styles.typingBox,
        height: open ? '0px' : '0px',
        opacity: open ? 1 : 0,
        padding: open ? '2rem' : '0',
        transition: 'all 0.6s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <p
          style={{
            fontSize: '1.3rem',
            fontWeight: 500,
            lineHeight: '1.6',
            margin: 0,
            opacity: open ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out 0.4s'
          }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>

      <LuckyCardPicker />

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
    backgroundColor: '#fbf9f4',
    color: '#2e2e2e',
    textAlign: 'center',
    padding: '8rem 2rem 4rem'
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
    margin: '3rem 0'
  },
  letterBox: {
    width: '30%',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: '#f1f6f2',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  routineSection: {
    marginTop: '8rem',
    textAlign: 'center'
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
  routineBox: {
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#222'
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
  }
};

export default RoutinePicker;
