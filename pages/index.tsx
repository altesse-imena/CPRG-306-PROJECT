import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}><a href="#home">Home</a></li>
            <li className={styles.navItem}><a href="#about">About Me</a></li>
            <li className={styles.navItem}><a href="#skills">Skills</a></li>
            <li className={styles.navItem}><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <div id="home" className={styles.section}>
        <div className={styles.profileImageContainer}>
          <div className={styles.profileImageBorder} />
          <Image
            src="/images/altesse-portrait.jpg" 
            alt="Altesse Imena"
            width={200} 
            height={200} 
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.name}>Altesse Imena</h1>
        <h2 className={styles.title}>Aspiring Software Engineer</h2>
        <div className={styles.buttonContainer}>
          <div className={styles.imageWithButtons}>
            <Image
              src="/images/linkedin.png" 
              alt="LinkedIn"
              width={50}
              height={50} 
            />
            <a
              href="https://www.linkedin.com/in/altesse-imena-5a2a2a242" 
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.imageWithButtons}>
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={50} 
              height={50}
            />
            <a
              href="https://github.com/altesse-imena"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          My name is Altesse Imena, and I am an aspiring software engineer with a diverse cultural background, having grown up in multiple countries. This experience has instilled in me a deep appreciation for different cultures and an openness to interacting with people from various backgrounds. I am bilingual, fluent in both English and French, which enhances my ability to communicate effectively in diverse environments. I am always eager to expand my professional network and explore new opportunities. Feel free to connect with me to discuss potential collaborations and opportunities.
        </p>
      </div>
      <div id="skills" className={`${styles.section} ${styles.skillsSection}`}>
        <h2>Skills</h2> 
        <div className={styles.skillsCategory}>
          <h3>Programming Languages</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillButton}>
              <Image src="/images/js.png" alt="JavaScript" className={styles.skillsLogo} width={24} height={24} />
              JavaScript
            </li>
            <li className={styles.skillButton}>
              <Image src="/images/ts.png" alt="TypeScript" className={styles.skillsLogo} width={24} height={24} />
              TypeScript
            </li>
            <li className={styles.skillButton}>
              <Image src="/images/python.png" alt="Python" className={styles.skillsLogo} width={24} height={24} />
              Python
            </li>
            <li className={styles.skillButton}>
              <Image src="/images/csharp.svg" alt="C#" className={styles.skillsLogo} width={24} height={24} />
              C#
            </li>
          </ul>
        </div>
        <div className={styles.skillsCategory}>
          <h3>Markup & Styling</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillButton}>
              <Image src="/images/css.svg" alt="CSS" className={styles.skillsLogo} width={24} height={24} />
              CSS
            </li>
            <li className={styles.skillButton}>
              <Image src="/images/html.svg" alt="HTML" className={styles.skillsLogo} width={24} height={24} />
              HTML
            </li>
          </ul>
        </div>
        <div className={styles.skillsCategory}>
          <h3>Libraries</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillButton}>
              <Image src="/images/react.svg" alt="React" className={styles.skillsLogo} width={24} height={24} />
              React.js
            </li>
            <li className={styles.skillButton}>
              <Image src="/images/angular.png" alt="Angular" className={styles.skillsLogo} width={24} height={24} />
              Angular
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className={styles.section}>
  <h2>Contact Me</h2>
  <div className={styles.contactButtonContainer}>
    <a
      href="mailto:imenaaltesse@gmail.com"
      className={styles.contactButton}
    >
      <Image
        src="/images/gmail.png" 
        alt="Gmail"
        className={styles.contactIcon}
        width={24}
        height={24}
      />
      Gmail
    </a>
    <a
      href="https://twitter.com/AltesseCFC" 
      className={styles.contactButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/twitter.png" 
        alt="Twitter"
        className={styles.contactIcon}
        width={24}
        height={24}
      />
      Twitter
    </a>
    <a
      href="https://instagram.com/altesse.imena" 
      className={styles.contactButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/instagram.png" 
        alt="Instagram"
        className={styles.contactIcon}
        width={24}
        height={24}
      />
      Instagram
    </a>
    <a
      href="tel:+17807073219" 
      className={styles.contactButton}
    >
      <Image
        src="/images/phone.jpg" 
        alt="Phone"
        className={styles.contactIcon}
        width={24}
        height={24}
      />
      Phone
    </a>
  </div>
</div>

    </div>
  )
}

export default Home
