
import background from "../resources/background.png";
import twitterLogo from "../resources/twitter_logo.png";
import instagramLogo from "../resources/instagram_logo.png";
import fiweeLogo from "../resources/fiwee_logo.png";


export function browserPage(){
    return (
        <div className="App">
        <img src={fiweeLogo} className="Fiwee-logo" alt="fiwee logo"/>
        <img src={background} className="Background-photo" alt="background" />
  
        <h1>COMING SOON</h1>
        <h2>Follow us on</h2>
  
        <span>
          <a href="https://www.instagram.com/fiweesoftworks/" target="_blank" rel="noreferrer">
            <img src={instagramLogo} className="Social-logo" alt="instagram" />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/fiweeofficial" target="_blank" rel="noreferrer">
            <img src={twitterLogo} className="Social-logo" alt="twitter" />
          </a>
        </span>
      </div>
    );
}