import React from "react";

// Routes
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { Home, Waiting } from "./pages";

// Redux store
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/waiting" element={<Waiting />} />
      </Routes>
    </Provider>
  );
}

export default App;
