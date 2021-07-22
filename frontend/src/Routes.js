import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, position: 'absolute', transform: 'translateX(50px)' },
    enter: { opacity: 1, position: 'relative', transform: 'translateX(0)' },
    leave: { opacity: 0, position: 'absolute', transform: 'translateX(-50px)' },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={NewContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </animated.div>
  ));
}
