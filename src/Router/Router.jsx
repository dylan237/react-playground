import { Switch, Route, Redirect } from "react-router-dom";
import * as pages from "./pages";

// 現在路由分三處維護，需要整理為一個物件集中處理
// 1.這裡定義全部
// 2.PageHeader 定義第一層路由的入口
// 3.Menu 定義第二層路由的入口
export function Router() {
  return (
    <Switch>
      <Route exact path="/playgroundA" component={pages.PlaygroundA} />
      <Route exact path="/playgroundB" component={pages.PlaygroundB} />
      <Route exact path="/pageA" component={pages.PageA} />
      <Route exact path="/pageB" component={pages.PageB} />
      <Route exact path="/pageC" component={pages.PageC} />
      <Route exact path="/pageD" component={pages.PageD} />
      <Redirect to="/playgroundA" />
    </Switch>
  );
}
