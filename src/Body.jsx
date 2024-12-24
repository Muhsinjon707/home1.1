import playButton from "../src/assets/img/play-button.svg";

function Body() {
  return (
    <main>
      <div className="container main__container">
        <div className="left-content">
          <h1 className="content-heading">
            Managing business payments has never been easier
          </h1>
          <p className="content-paragraph">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything.
          </p>
          <div className="content-buttons">
            <button className="process-btn">Our Process</button>
            <a href="#" className="process-link">
              <img
                src={playButton}
                alt="Play button"
                width="60"
              />
              <span className="link-text">See How It Works</span>
            </a>
          </div>
        </div>
        <div className="right-content">
          <h3 className="startingHeading">Get Started for Free</h3>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="password"
              name="email"
              placeholder="Password"
            />
          </label>
          <button className="startingButton" type="button">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}

export default Body;
