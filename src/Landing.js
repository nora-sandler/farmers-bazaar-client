import React from "react"
import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
import ShoppersSearch from "./ShoppersSearch"


class Landing extends React.Component {
  render() {
    return (
      <div className = 'landing-main'>
        <div className="Landing">
          {/* <Header /> */}
          <section id="landingPage">
            <div id="description">
              <h5>Welcome to the farmer's bazaar, create your inventory, 
              update it and sell farm fresh products to everyone who is interested in fresh local produce. </h5>
            </div>
            <ShoppersSearch/>
          </section>
          {/* <Register/>
        <Login/> */}
          <Footer />
        </div>
      </div>

    );
  }
}

export default Landing;
