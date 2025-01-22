import '../styles/hero.css';

function Hero(){
     return(
          <section className="hero">
    <h1>Hi, Iam Your Name</h1>
    <p>Aspiring Frontend Developer | React Enthusiast</p>
    <button onClick={() => document.getElementById('projects').scrollIntoView()}>View My Work</button>
  </section>
     )
}
export default Hero;
