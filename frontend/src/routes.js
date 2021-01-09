import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        /** path="/" utilizado para acesso a localhost:3000, sem uso de outro
        dominio*/
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
