import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Karthiga Varshini</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Hello, I'm Karthiga Varshini</h2>

          <p>
            Full Stack Developer | MERN Stack Learner | Computer Science
            Student
          </p>

          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>

        <div className="about">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            alt="Profile"
            className="profile-img"
          />

          <br />

          <p>
            I am a Computer Science student with a passion for Full Stack
            Development, Web Design, and Mobile App Development. I enjoy
            building user-friendly websites and learning new technologies.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Python</div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio website developed using HTML, CSS, and
              JavaScript.
            </p>
          </div>

          <div className="project-card">
            <h3>Face Recognition Attendance System</h3>

            <p>
              Attendance system using Python, OpenCV, and Machine Learning.
            </p>
          </div>

          <div className="project-card">
            <h3>Student Management System</h3>

            <p>Web application to manage student records using MERN Stack.</p>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>

        <div className="education">
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>B.Tech / B.E</td>
                <td>NPR Engineering College</td>
                <td>2023 - 2027</td>
              </tr>

              <tr>
                <td>Higher Secondary</td>
                <td>GGHS School</td>
                <td>2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>

        <div className="certificates">
          <div className="certificate">Full Stack Development</div>
          <div className="certificate">Python Programming</div>
          <div className="certificate">Java Programming</div>
          <div className="certificate">React Development</div>
        </div>
      </section>

      <section>
        <h2>Internship</h2>

        <div className="internship">
          <h3>Hitasoft Technology Solutions Pvt. Ltd.</h3>

          <p>Position: Full Stack Development Intern</p>

          <p>Duration: 01/06/2026 - 30/06/2026</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>

        <div className="contact">
          <p>Email: karthiga@gmail.com</p>

          <p>Phone: +91 98765 43210</p>

          <p>Location: Madurai, Tamil Nadu</p>

          <p>
            GitHub:
            <a href="#"> github.com/yourprofile</a>
          </p>

          <p>
            LinkedIn:
            <a href="#"> linkedin.com/in/yourprofile</a>
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Karthiga Varshini. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;