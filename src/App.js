// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Segment from "./Segment";
import Body from "./view/Body";
import Leftpage from "./view/Leftpage";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Leftpage />
        <Body></Body>
      </div>
      <div className="right">
        <Header></Header>
        <Segment></Segment>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
