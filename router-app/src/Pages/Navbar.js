import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const isHome = location.pathname === "/";

useEffect(() => {
  if (isHome) {
    const handleScroll = () => {
      const colorSection = document.querySelector(".color-section");
      const videoSection = document.querySelector(".video-section");

      const colorTop = colorSection?.getBoundingClientRect().top;
      const colorBottom = colorSection?.getBoundingClientRect().bottom;

      const videoTop = videoSection?.getBoundingClientRect().top;
      const videoBottom = videoSection?.getBoundingClientRect().bottom;

      // video-section 이 조금이라도 보이면 → 흰색
      if (
        videoBottom > 0 &&
        videoTop < window.innerHeight
      ) {
        setIsDark(false); // 흰색
      }
      //  color-section 이 조금이라도 보이면 → 초록
      else if (
        colorBottom > 0 &&
        colorTop < window.innerHeight
      ) {
        setIsDark(true); // 초록
      }
      // 둘 다 안 보이면 → 흰색
      else {
        setIsDark(false); // 흰색
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  } else {
    setIsDark(true); // 서브페이지는 기본 초록
  }
}, [location, isHome]);





  return (
    <nav
      style={{
        ...styles.nav,
        top: isHome ? 15 : 0,
        backgroundColor: isHome ? "transparent" : "#fbf9f4",
        // boxShadow: isHome ? "none" : "0 2px 10px rgba(0,0,0,0.05)",
        transition: "all 0.4s ease",
      }}
    >
      <Link
        to="/"
        style={{
          ...styles.logoLink,
          color: isDark ? "#426d56" : "#fff",
        }}
      >
        <h2
          style={{
            ...styles.logo,
            color: isDark ? "#426d56" : "#fff",
          }}
        >
          Calmind
        </h2>
      </Link>

      <ul style={styles.menu}>
        {["AnxietyPop", "NatureSound", "RoutinePicker", "Breathe", "CopyCalm"].map(
          (path, i) => (
            <li key={i}>
              <Link
                to={`/${path}`}
                style={{
                  ...styles.menuItem,
                  color: isDark ? "#426d56" : "#fff",
                }}
              >
                {path.replace(/([A-Z])/g, " $1").trim().toUpperCase()}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3vw",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    boxSizing: "border-box",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "2vw",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },
  menuItem: {
    fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
    textDecoration: "none",
    transition: "color 0.4s ease",
  },
  logoLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "clamp(1.1rem, 1.8vw, 2rem)",
    margin: 0,
    transition: "color 0.4s ease",
  },
};

export default Navbar;


