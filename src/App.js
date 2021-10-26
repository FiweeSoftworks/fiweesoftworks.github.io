import "./App.css";


import { isMobileOnly} from 'react-device-detect';
import { browserPage } from "./pages/browserPage";
import {mobilePage} from "./pages/mobilePage"


function App() {


  // if(!isMobileOnly){
  //   import("./Desktop.css")
  //   return browserPage("./Desktop.css")
  // }
  import("./Mobile.css")
  return mobilePage("./Mobile.css")

}

export default App;
