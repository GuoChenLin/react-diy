import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
// 各个路由(第一级路由全部可以放在这里)
import Home from '../pages/Home';
import Test from '../pages/test';
import More from '../pages/more';

const HomeRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={
          () => (
            <>
              <Route exact component={Home} path="/home"></Route>
              <Route exact component={Test} path="/test"></Route>
              <Route exact component={More} path="/more"></Route>
            </>
          )
        }></Route>
      </Switch>
    </HashRouter>
  )
}

export default HomeRouter
// ?data=E3EYjMCM9Trgv2AwnLiJOICgfYzw50iIWIBw9Tzw50swqIoIi4nJeWmdCZnZa5nZq1otC0iIWIDgLTzvn0yw1WiJOImtyXmdG5ndm1mdyXmciSiNvPzci6iJuXntK3mJG1ndCWmZi5ndiXmZeIFq%3D%3D60&signature=7c77c9c587822801883e3432ffb4a480