import "../css/btnsCR.css";

export default function Social() {
  return (
    <div className="social-content">
      <div className="btnsCR">
        <a
          href="https://drive.google.com/file/d/1lmAyup6zr8xizod5GAs5aV2H4FS6gVry/view?usp=sharing"
          target="_blank"
        >
          <button className="btn border font no-border">RESUME</button>
        </a>
      </div>
      <div className="links">
        <a
          className="link"
          target="_blank"
          href="https://leetcode.com/zaidmasuldar/"
        >
          <i className="fa-solid fa-code"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.hackerrank.com/profile/zaidmasuldar"
        >
          <i className="fa-brands fa-hackerrank"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://github.com/zaid-sinpie"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/zaid-masuldar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}
