import React, { useState } from "react";
import NatureRelaxActivity from "./NatureRelaxActivity";

const NatureSound = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [activeSounds, setActiveSounds] = useState({});

  const sounds = [
    { name: "비", icon: "Rain.png", emoji: "🌧", file: "Rain Heavy Loud__.mp3" },
    { name: "바람", icon: "Wind.png", emoji: "🌲", file: "Wind__.mp3" },
    { name: "파도", icon: "Wave.png", emoji: "🌊", file: "Waves__.mp3" },
    { name: "새소리", icon: "Bird_.png", emoji: "🐦", file: "bird.mp3" },
    { name: "장작", icon: "Fire.png", emoji: "🔥", file: "Fire.mp3" },
    { name: "번개", icon: "lightning_.png", emoji: "🌩", file: "Thunder__.mp3" },
    { name: "끓는 소리", icon: "Boil.png", emoji: "🍵", file: "PourBoiling__.mp3" },
    { name: "여름밤", icon: "night_.png", emoji: "🌃", file: "Night__.mp3" }
  ];

  const routineTexts = [
    "1단계: 눈을 감고 자연의 소리에 집중해보세요.",
    "2단계: 소리를 들으며 떠오르는 감정을 조용히 느껴보세요.",
    "3단계: 주변에서 들리는 실제 자연의 소리에도 귀를 기울여보세요.",
    "4단계: 좋아하는 자연 소리를 조합하여 나만의 플레이리스트를 만들어보세요.",
    "5단계: 자연의 소리 속에서 마음을 정리하고 차분한 상태로 돌아와보세요."
  ];

  const toggleSound = (name, file) => {
    const audio = new Audio(`/mp3/${file}`);
    audio.loop = true;

    setActiveSounds(prev => {
      const updated = { ...prev };
      if (updated[name]) {
        updated[name].pause();
        delete updated[name];
      } else {
        audio.play();
        updated[name] = audio;
      }
      return updated;
    });
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>02</p>
      <h1 style={styles.mainTitle}>Nature Sound</h1>
      <h2 style={styles.subtitle}>나만의 자연 소리</h2>
      <p style={styles.description}>“자연의 소리를 조합하고, 감정의 파동을 느껴보세요.”</p>

      <div style={styles.howToBox}>
        <h3 style={styles.howToTitle}>HOW TO</h3>
        <ol style={styles.howToList}>
          <li>각 체크박스를 눌러 자연의 소리를 감상해보세요.</li>
          <li>체크박스를 중복 선택하여 자연의 소리를 조합해보세요.</li>
          <li>자연의 소리를 들으며 떠오르는 생각을 정리해보세요.</li>
        </ol>
      </div>

      <div style={styles.grid}>
        {sounds.map((sound, index) => (
          <div key={index} style={styles.item}>
            <img src={`/Icon/${sound.icon}`} alt={sound.name} style={styles.icon} />
            <p style={styles.label}>{sound.emoji} {sound.name}</p>
            <input
              type="checkbox"
              checked={!!activeSounds[sound.name]}
              onChange={() => toggleSound(sound.name, sound.file)}
              style={styles.checkbox}
            />
          </div>
        ))}
      </div>

        <NatureRelaxActivity />


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
    padding: '8rem 2rem 4rem',
  },
  step: {
    fontSize: '1rem',
    color: '#588d6d',
    marginBottom: '0.5rem'
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    margin: '0',
    color: '#588d6d'
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: '400',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    justifyContent: 'center',
    marginTop: '8rem',
    marginBottom: '10rem'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.1rem'
  },
  icon: {
    width: '60px',
    height: '60px',
    objectFit: 'contain'
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#365b47'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: '#588d6d',
    cursor: 'pointer'
  },
  routineSection: {
    marginTop: '6rem',
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
    transition: 'background-color 0.4s ease',
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#222',
    backgroundColor: '#f1f6f2'
  }
};

export default NatureSound;

