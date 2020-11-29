import React from "react"
import "./App.css"
import Header from "./Header"


class WeeklyCalendar extends React.Component {
  render() {
    return (
      <div className="WeeklyCalendar">
        <Header/>
        <section id="weeklyCalendarPage">
          <div className="divTable weekly-meal-calendar">
            <div className="divTableHeading">
              <div className="divTableRow">
                <div className="divTableHead">Monday</div>
                <div className="divTableHead">Tuesday</div>
                <div className="divTableHead">Wednesday</div>
                <div className="divTableHead">Thursday</div>
                <div className="divTableHead">Friday</div>
                <div className="divTableHead">Saturday</div>
                <div className="divTableHead">Sunday</div>
              </div>
            </div>
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">Breakfast</div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Lunch</div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Dinner</div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Snack</div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
                <div className="divTableCell"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WeeklyCalendar;
