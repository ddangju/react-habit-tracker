import React, { Component } from "react";
import Habit from "./habit";
import InputForm from "./inputForm";

class Habits extends Component {
  render() {
    return (
      <>
        <InputForm onAdd={this.props.onAdd}></InputForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="resetBtn" onClick={this.props.handleReset}>
          reset
        </button>
      </>
    );
  }
}

export default Habits;
