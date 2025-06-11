import React, { useState, useEffect } from 'react';

const luckyMessages = [
  "오늘 당신의 하루에 작은 기적이 찾아옵니다.",
  "뜻밖의 행운이 가까이에 있습니다.",
  "긍정적인 마음이 좋은 결과를 가져올 거예요.",
  "새로운 기회가 열릴 것입니다.",
  "기다리던 소식이 도착할 거예요.",
  "소소한 기쁨이 가득한 하루가 될 거예요."
];

const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const luckyColors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'White', 'Black', 'Orange'];
const luckyItems = ['열쇠고리', '노트북', '책', '머그컵', '목걸이', '반지', '시계', '가방', '볼펜'];

const luckyImages = [
  '/Images/image143.png',
  '/Images/image144.png',
  '/Images/image145.png',
  '/Images/image146.png',
  '/Images/image147.png',
  '/Images/image148.png',
  '/Images/image149.png',
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const LuckyCardPicker = () => {
  const [visibleCards, setVisibleCards] = useState(Array(9).fill(false));
  const [flippedCards, setFlippedCards] = useState(Array(9).fill(false));
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [isCardFlipping, setIsCardFlipping] = useState(Array(9).fill(false));
  const [luckyDataList, setLuckyDataList] = useState([]);
  const [showRoutineSub, setShowRoutineSub] = useState(false);

  useEffect(() => {
    triggerInitialAnimation();
  }, []);

  const triggerInitialAnimation = () => {
    setVisibleCards(Array(9).fill(false));
    setFlippedCards(Array(9).fill(false));
    setSelectedCard(null);
    setSelectedImage(null);
    setIsCardSelected(false);
    setIsCardFlipping(Array(9).fill(false));
    setShowRoutineSub(false);

    const newLuckyDataList = Array(9).fill(null).map(() => ({
      message: getRandomItem(luckyMessages),
      number: getRandomItem(luckyNumbers),
      color: getRandomItem(luckyColors),
      item: getRandomItem(luckyItems),
    }));

    setLuckyDataList(newLuckyDataList);

    newLuckyDataList.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 150);
    });
  };

  const handleCardClick = (index) => {
    if (isCardSelected) {
      setShowRoutineSub(true);
      setTimeout(() => setShowRoutineSub(false), 3000);
      return;
    }

    setIsCardFlipping((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    setFlippedCards((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    setTimeout(() => {
      setSelectedCard(index);
      setIsCardSelected(true);
      setSelectedImage(getRandomItem(luckyImages));
    }, 600);
  };

  const handleModalClose = () => {
    setSelectedCard(null);
    setSelectedImage(null);
  };

  const handleReset = () => {
    triggerInitialAnimation();
  };

  return (
    <section style={{ marginTop: '6rem', textAlign: 'center' }}>
      <p style={styles.step}>BONUS</p>
      <h1 style={styles.mainTitle}>Today's Lucky Card</h1>
      <h2 style={styles.subtitle}>오늘의 행운 카드</h2>
      <p style={styles.description}>“카드를 펼쳐 오늘의 행운을 확인해보세요.”</p>

      {showRoutineSub && (
        <p style={styles.routineSub}>⟲버튼을 눌러 카드를 다시 섞은 뒤 뽑아주세요.</p>
      )}

      <button onClick={handleReset} style={styles.resetButton}>⟲</button>

      <div style={styles.cardRow}>
        {Array(9).fill(null).map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.cardContainer,
              opacity: visibleCards[index] ? 1 : 0,
              transform: visibleCards[index] ? 'translateX(-5vw)' : 'translateX(-30px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              zIndex: isCardFlipping[index] ? 100 : index,
            }}
            onClick={() => {
              if (!flippedCards[index]) handleCardClick(index);
            }}
          >
            <div
              style={{
                ...styles.cardInner,
                transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                boxShadow:
                  index !== selectedCard && !flippedCards[index] && !isCardFlipping[index]
                    ? '0 12px 24px rgba(0, 0, 0, 0.2)'
                    : 'none',
              }}
            >
              <div style={styles.cardFront}></div>
              <div style={styles.cardBack}>🍀</div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && selectedImage && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={handleModalClose} style={styles.closeButton}>X</button>
            <img src={selectedImage} alt="Lucky" style={styles.luckyImage} />
            <p style={styles.luckyMessage}>{luckyDataList[selectedCard]?.message}</p>
            <p>행운의 숫자: {luckyDataList[selectedCard]?.number}</p>
            <p>행운의 색: {luckyDataList[selectedCard]?.color}</p>
            <p>행운의 아이템: {luckyDataList[selectedCard]?.item}</p>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  step: {
    fontSize: '1rem',
    color: '#588d6d',
    marginBottom: '0.5rem',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: 0,
    color: '#588d6d',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#426d56',
    marginTop: '0.5rem',
    marginBottom: '2rem',
  },
  description: {
    fontSize: '1.4rem',
    color: '#365b47',
    marginTop: '3rem',
    marginBottom: '2rem',
  },
  routineSub: {
    fontSize: '1rem',
    color: '#426d56',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  resetButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5rem',
    paddingLeft: '300px',
  },
  cardContainer: {
    width: '150px',
    height: '220px',
    marginLeft: '-100px',
    perspective: '1000px',
    cursor: 'pointer',
  },
  cardInner: {
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s, box-shadow 0.3s ease',
    transformStyle: 'preserve-3d',
    position: 'relative',
    borderRadius: '12px',
  },
  cardFront: {
    backgroundColor: '#f1f6f2',
    color: '#588d6d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    borderRadius: '12px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  },
  cardBack: {
    backgroundColor: '#588d6d',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    borderRadius: '12px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    overflow: 'hidden',
  },
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
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    textAlign: 'center',
    position: 'relative',
    maxWidth: '400px',
    width: '90%',
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#588d6d',
    fontWeight: '600',
    
  },
  luckyImage: {
    width: '100%',
    height: 'auto',
    marginTop: '1rem',
    marginBottom: '0.7rem',
    borderRadius: '8px',
  },
  luckyMessage: {
    fontSize: '1.3rem',
    fontWeight: '800',
    marginBottom: '1rem',
    color: '#588d6d',
  },
};

export default LuckyCardPicker;
