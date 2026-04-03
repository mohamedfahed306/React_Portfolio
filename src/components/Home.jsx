import "./Home.css";

const Home = () => {
   return (
    <div id="home" className="home">
      <div className="home-links">
        <p>Follow On</p>
        <div className="line"></div>
        <div className="home-links-icons">
          <a href="#"><i class="ri-facebook-fill"></i></a>
          <a href="https://github.com/mohamedfahed306?tab=repositories"><i class="ri-github-line"></i></a>
          <a href="https://in.linkedin.com/"><i class="ri-linkedin-fill"></i></a>
        </div>

      </div>
      <div className="home-profile">
        <div className="home-img">
          <img src="fahed-dp.jpg" alt="" />
        </div>
        <div className="home-profile-details">
          <p>Hello, I'm</p>
          <h2>Mohamed Fahed</h2>
          <p>A Web Developer & Designer</p>
          <button>Hire Me <i class="ri-user-follow-line"></i></button>
        </div>

      </div>
      <div className="home-sign">
        <i class="ri-arrow-left-s-line arrow"></i>
        <div className="scroll">Scroll Down</div>
        <i class="ri-mouse-line mouse"></i>
      </div>
    </div>
  )
}

export default Home