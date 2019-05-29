import React from "react";
import Profile from "./Profile";
import Counter from "./Counter";
import DelayedToggle from "./DelayedToggle";
import UserProfile from "./UserProfile";

const App = () => {
  // return <Profile username="yujeong Noh" name="노유정" />;
  // return <Counter />;
  // return <DelayedToggle />;
  return <UserProfile id={1} />;
};

export default App;
