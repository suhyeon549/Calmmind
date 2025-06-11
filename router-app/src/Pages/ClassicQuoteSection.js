// ClassicQuoteSection.js
import React, { useState } from 'react';

const classicQuotes = [
  {
    quote: '“우리는 꿈으로 이루어진 존재다. 우리의 작은 삶은 잠으로 둘러싸여 있다.”',
    book: '템페스트',
    author: '윌리엄 셰익스피어',
    summary: '셰익스피어의 희곡 「템페스트」에서 “We are such stuff / As dreams are made on…” 구절로, 꿈과 현실, 인생의 덧없음을 비유적으로 표현한 명언입니다.',
    image: 'book1.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“위대함을 두려워하지 마라. 어떤 사람은 태어날 때부터 위대하고, 어떤 이는 위대함을 성취하고, 어떤 이는 위대함이 자신에게 주어진다.”',
    book: '십이야',
    author: '윌리엄 셰익스피어',
    summary: '희곡 「십이야」의 말로, 위대함과 잠재력에 대한 격려의 메시지입니다.',
    image: 'book2.jpg',
    links: { buy: 'https://www.kyobobook.co.kr/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“세상이 끝나는 방식은 폭발이 아니라 속삭임이다.”',
    book: 'The Hollow Men',
    author: 'T. S. 엘리엇',
    summary: '시 「허울뿐인 인간들(The Hollow Men)」의 마지막 구절로, 전후 인간의 무의미와 허무를 대변합니다.',
    image: 'book3.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“사람들은 변화를 두려워하지만, 변화는 삶의 본질이다.”',
    book: '변신 이야기',
    author: '오비디우스',
    summary: '로마 시인 오비디우스의 『변신 이야기(Metamorphoses)』에서 영원한 변화의 흐름을 상징적으로 담아낸 문구입니다.',
    image: 'book4.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“내 영혼은 용기 있는 자에게 평화를 노래한다.”',
    book: '전쟁과 평화',
    author: '레프 톨스토이',
    summary: '러시아 문학의 대작 「전쟁과 평화」에서 인류의 용기와 평화에 대한 성찰을 담고 있습니다.',
    image: 'book5.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“왕위의 왕, 나는 오짐안디아스이다. 만약 나의 위대함을 알고 싶다면...”',
    book: '오지맨디아스',
    author: '퍼시 셸리',
    summary: '완결된 권력의 허무함을 보여주는 셸리의 소네트입니다.',
    image: 'book6.jpg',
    links: { buy: 'https://www.kyobobook.co.kr/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“모든 동물은 평등하다. 그러나 어떤 동물은 더 평등하다.”',
    book: '동물 농장',
    author: '조지 오웰',
    summary: '권력과 위선에 대한 풍자적인 문장으로, 권력의 불평등을 강하게 비판합니다.',
    image: 'book7.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“오만과 편견은 인간관계를 왜곡시킨다.”',
    book: '오만과 편견',
    author: '제인 오스틴',
    summary: '사회적 편견과 오해가 사랑을 방해할 수 있음을 시사하는 대표 문구입니다.',
    image: 'book8.jpg',
    links: { buy: 'https://www.kyobobook.co.kr/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“존경받으며 살 거라면, 시간보다 위대한 꿈을 가져라.”',
    book: '코리올라누스',
    author: '윌리엄 셰익스피어',
    summary: '셰익스피어의 희곡에서 꿈과 명예, 인간의 야망을 이야기하는 문장입니다.',
    image: 'book9.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  },
  {
    quote: '“한겨울 한가운데서, 나는 내 안에 꺾이지 않는 여름이 있음을 알았다.”',
    book: '위대한 나의 여름',
    author: '알베르 카뮈',
    summary: '카뮈의 산문 『결혼, 여름름』에서, 고통 속에서도 내면의 불굴의 의지를 표현한 유명한 명언입니다.',
    image: 'book10.jpg',
    links: { buy: 'https://www.yes24.com/', ebook: 'https://www.millie.co.kr/v3/brand?utm_source=google&utm_medium=cpc&utm_campaign=subs&utm_content=brand_millie&utm_term=%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC&gad_source=1&gad_campaignid=22525107743&gbraid=0AAAAAC-SaZeZ5nGoje2oy4JtWMocf2f3v&gclid=Cj0KCQjw0qTCBhCmARIsAAj8C4auJzX0zmZ_c2dLY2wCrK2q14q1yAbk7VlaqQ8rMgwxVxr5yq2EE5caAuMyEALw_wcB' }
  }
];

const ClassicQuoteSection = () => {
  const [activity, setActivity] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [started, setStarted] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedBookInfo, setSelectedBookInfo] = useState(null);

  const handleClick = () => {
    const random = classicQuotes[Math.floor(Math.random() * classicQuotes.length)];
    setActivity(random.quote);
    setBookTitle(random.book);
    setSelectedBookInfo(random);
    setStarted(true);
  };

  return (
    <section style={styles.section}>
      <p style={styles.step}>BONUS</p>
      <h1 style={styles.mainTitle}>Classic Quote</h1>
      <h2 style={styles.subtitle}>고전 명문장</h2>
      <p style={styles.description}>
        "고전 문학 속 명문장을 읽어보며 나만의 영감을 채워보세요."
      </p>

      <div style={{
        ...styles.typingBox,
        opacity: 1,
        transition: 'opacity 0.5s ease'
      }}>
        {activity ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>{activity}</p>
            <p style={{ fontWeight: 'bold' }}>- {bookTitle}</p>
          </div>
        ) : (
          <p style={{ color: '#888' }}>'make'버튼을 눌러 문장과 책 이름을 확인해보세요.</p>
        )}
      </div>

      <button onClick={handleClick} style={styles.makeButton}>
        {started ? '⟲' : 'Make'}
      </button>

      {activity && (
        <button
          onClick={() => setShowQuoteModal(true)}
          style={{ ...styles.makeButton, backgroundColor: '#426d56', marginLeft: '0.5rem', padding: '0.6rem 1.5rem'}}
        >
          책 정보 보기
        </button>
      )}

      {showQuoteModal && selectedBookInfo && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={() => setShowQuoteModal(false)} style={styles.closeButton}>X</button>
            <img src={process.env.PUBLIC_URL + `/Images/${selectedBookInfo.image}`} alt={selectedBookInfo.book} style={styles.modalImage} />
            <h2>{selectedBookInfo.book}</h2>
            <p>저자: {selectedBookInfo.author}</p>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{selectedBookInfo.summary}</p>
            <div style={styles.linkButtons}>
              <a href={selectedBookInfo.links.buy} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>종이책 구매</a>
              <a href={selectedBookInfo.links.ebook} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>전자책 보기</a>
            </div>
          </div>
        </div>
      )}
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
  step: {
    fontSize: '1rem',
    color: '#588d6d',
    marginBottom: '0.5rem'
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: 0,
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
    color: '#222'
  },
  makeButton: {
    padding: '0.7rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#588d6d',
    color: '#fff',
    cursor: 'pointer',
    margin: '2rem 0 1rem'
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
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
    position: 'relative',
    color:  '#426d56',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: '1.2rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: '#588d6d',
    fontWeight: '600',
  },
  modalImage: {
    width: '200px',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '1rem'
  },
  linkButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem'
  },
  linkButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#588d6d',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px'
  }
};

export default ClassicQuoteSection;
