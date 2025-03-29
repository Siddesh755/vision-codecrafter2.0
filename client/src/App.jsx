import { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>
          <AppRoutes />
        </div>
      </Router>
  );
}

export default App;
