import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Email from "./components/Email/Email";
import Contacts from "./components/Contacts/Contacts"
import Crypto from "./components/Crypto/Crypto";
import Kanban from "./components/Kanban/Kanban";
import Invoicing from "./components/Invoicing/Invoicing";
import Banking from "./components/Banking/Banking";
import FileManager from "./components/FileManager/FileManager";
import TodoList from "./components/TodoList/TodoList";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/crypto">
           <Crypto />
          </Route>
          <Route path="/kanban">
            <Kanban />
          </Route>
          <Route path="/invoicing">
            <Invoicing />
          </Route>
          <Route path="/banking">
            <Banking />
          </Route>
          <Route path="/file-manager">
            <FileManager />
          </Route>
          <Route path="/todo-list">
            <TodoList />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
