import React from 'react';

function MainContent() {
  return (
    <div className="main-full-container">

        <div className='main-title-container'>
          <h1 className="main-title">Jacob Bassett</h1>
          <h2 className="main-career">Full-Stack Developer</h2>
          {/* <h3 className="main-portfolio"><a>Portfolio Website</a></h3> */}
          <form className="main-button-container">
            <button className="main-email" onClick={() =>  window.open('mailto:jacobbassett@gmail.com?subject=Responding to Jacob Bassett\'s Business Card')}><i class="fa-solid fa-envelope"></i>  Email</button>
          </form>
        </div>

        <div className="main-paragraphs">
          <h4 className="main-first-paragraph-title">About</h4>
          <p className="main-first-paragraph">I am a full-stack developer passionate about making tools that users can enjoy and depend on.</p>
          <h4 className="main-second-paragraph-title">Interests</h4>
          <p className="main-second-paragraph">Mechanically Inclined, Amateur Historian, Molecular Biologist, Rock Climber, Pizza Baker, Podcast Connoisseur, Ardent Reader</p>

        </div>
    </div>
  );
}

export default MainContent;
