import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import RegisterGodfather from './pages/RegisterGodfather';
import ViewGodfather from './pages/ViewGodfather';
import RegisterChildren from './pages/RegisterChildren';
import ViewChildren from './pages/ViewChildren';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        /** path="/" utilizado para acesso a localhost:3000, sem uso de outro
        dominio*/
        <Route path="/" exact component={Logon} />
        <Route path="/godfhater/create" component={RegisterGodfather} />
        <Route path="/godfhater/view" component={ViewGodfather} />
        <Route path="/children/create" component={RegisterChildren} />
        <Route path="/children/view" component={ViewChildren} />
      </Switch>
    </BrowserRouter>
  );
}
