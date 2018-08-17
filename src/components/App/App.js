import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:date" component={CalendarGrid} />
        <Route component={() => <div>Not found - 404</div>} />
      </Switch>
    </Router>
  );
}
