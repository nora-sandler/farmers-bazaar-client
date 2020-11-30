import React from "react"
import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
//change the page to match the farmer's page

class Landing extends React.Component {
  render() {
    return (
      <div className = 'landing-main'>
        <div className="Landing">
          <Header />
          <section id="landingPage">
            <div id="description">
              {/* <h2>Diet meal planner</h2> */}
              <h5>Welcome to the farmer's bazaar, create your inventory, update it and sell farm fresh products to everyobe who is interested in fresh local produce. </h5>
              
            </div>
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
