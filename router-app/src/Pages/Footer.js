import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <div style={styles.left}>
          <p><strong>© Yeon Su Hyeon</strong></p>
          <p>All rights reserved.</p>
        </div>

        <div style={styles.center}>
          <p><strong>Interactive web project</strong></p>
          <p>created for the 2-1 class at Kaywon University of Art & Design</p>
          {/* <div style={styles.credit}>
            <p><a href="https://www.flaticon.com/uicons">Flaticon</a>의 UIcon</p>
            <p><a href="https://www.flaticon.com/kr/free-icons/" title="새 아이콘">새 아이콘 제작자: Freepik - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/kr/free-icons/" title="볼트 아이콘">볼트 아이콘 제작자: erwinalamsyah - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/kr/free-icons/" title="불 아이콘">불 아이콘 제작자: Freepik - Flaticon</a></p>
            <p> music: YouTube Studio </p>
          </div> */}
        </div>

        <div style={styles.right}>
          <p><strong>contact</strong></p>
          <p>yeonsh030@kaywon.ac.kr</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#16311B',
    color: '#fff',
    padding: '3rem 2rem',
    fontSize: '0.9rem'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'left',
    gap: '2rem'
  },
  left: {
    flex: '1 1 200px'
  },
  center: {
    flex: '2 1 400px',
    textAlign: 'center'
  },
  right: {
    flex: '1 1 200px',
    textAlign: 'right'
  },
  credit: {
    fontSize: '0.8rem',
    color: '#ccc',
    marginTop: '1rem',
    lineHeight: '1.5'
  }
};

export default Footer;
