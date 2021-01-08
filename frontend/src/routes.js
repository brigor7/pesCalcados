import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './pages/Logon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        /** path="/" utilizado para acesso a localhost:3000, sem uso de outro
        dominio*/
        <Route path="/" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}
