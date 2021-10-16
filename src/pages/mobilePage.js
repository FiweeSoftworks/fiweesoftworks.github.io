
import background from "../resources/background_mobile.png";
import twitterLogo from "../resources/twitter_logo.png";
import instagramLogo from "../resources/instagram_logo.png";
import fiweeLogo from "../resources/fiwee_logo.png";
import darkness from "../resources/mobile_darkness_1.png"
import darknessBlock from "../resources/mobile_container.png"


export function mobilePage(){
    return (
      <>

        <div>
          <img src={background} className="Mobile-background" alt="background" />
          {/* <img src={darkness} className="Mobile-darkness" alt="background" /> */}
          <div className="Mobile-logo-panel">
            {/* <img src={darknessBlock} className="Mobile-darkness-block" alt="background" /> */}
            <h1 className="Mobile-text">COMING SOON</h1>
            <span className="Mobile-social-container">
              <span >
                <a href="https://www.instagram.com/fiweesoftworks/" target="_blank" rel="noreferrer">
                  <img src={instagramLogo} className="Mobile-Social-Logo" alt="instagram" />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/fiweeofficial" target="_blank" rel="noreferrer">
                  <img src={twitterLogo} className="Mobile-Social-Logo" alt="twitter" />
                </a>
              </span>
            </span>
          </div>


          <img src={fiweeLogo} className="Fiwee-logo" alt="fiwee logo"/>
        </div>
      </>

  
        // {/* <h1>COMING SOON</h1>
        // <h2>Follow us on</h2>
  
        // <span>
        //   <a href="https://www.instagram.com/fiweesoftworks/" target="_blank" rel="noreferrer">
        //     <img src={instagramLogo} className="Social-logo" alt="instagram" />
        //   </a>
        // </span>
        // <span>
        //   <a href="https://twitter.com/fiweeofficial" target="_blank" rel="noreferrer">
        //     <img src={twitterLogo} className="Social-logo" alt="twitter" />
        //   </a>
        // </span> */}
      
    );
}