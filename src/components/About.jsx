import "./About.css";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <p>What i do</p>
      </div>
      
      <div className="about-container">
        <div className="about-img">
          <div className="about-img-cover">
           <img src="shanks2.png"  />
          </div>
        </div>
        <div className="about-details">
          <h3>I'm a Web Developer & HVAC designer</h3>
          <p className="about-para">Lorem ipsum, dolcorporis aut sint animi odio, fugiat voluptas expedita consectetur cumque ipsum molestias explicabo accusamus natus reprehenderit omnis modi. Enim itaque omnis voluptatibus facere eveniet reprehenderit neque est nostrum possimus? Tenetur cum quia quibusdam?</p>
          <p className="about-para">Lorem ipsum, dolort voluptas expedita consectetur cumque ipsum molestias explicabo accusamus natus reprehenderit omnis modi. Enim itaque omnis voluptatibus facere eveniet reprehenderit neque est nostrum possimus? Tenetur cum quia quibusdam?</p>
          <div className="about-boxes">
            <div className="about-box">
              <h2>07</h2>
              <p>Years of Experience</p>
            </div>
            <div className="about-box">
              <h2>07</h2>
              <p>Years of Experience</p>
            </div>
            <div className="about-box">
              <h2>07</h2>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="about-buttons">
            <button >Hire Me</button>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About