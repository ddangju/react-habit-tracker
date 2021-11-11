import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
// import Navbar from "./components/navbar";

class app extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  onIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  onDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  onDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  onAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const Habits = this.state.habits.map((item) => {
      return (item.count = 0);
    });
    this.setState({ Habits });
  };

  render() {
    return (
      <div>
        <Habits
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
          onAdd={this.onAdd}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default app;
