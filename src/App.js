import { HashRouter, Switch, Route } from "react-router-dom";
import TasksPage from "./features/Tasks/TasksPage";
import AuthorPage from "./features/AuthorPage/AuthorPage";
import TaskPage from "./features/Tasks/TaskPage";

import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
  </HashRouter>
);

export default App;
