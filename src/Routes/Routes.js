import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseView from "../Presentation/View/BaseView";
import ListNews from "../Presentation/View/ListNews/ListNews";
import DetailNews from "../Presentation/View/DetailNews/DetailNews";
import SearchNews from "../Presentation/View/SearchNews/SearchNews";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} exact>
            <BaseView content={<ListNews />} />
          </Route>
          <Route path={"/detail/:title"} exact>
            <BaseView content={<DetailNews />} />
          </Route>
          <Route path={"/search/"} exact>
            <BaseView content={<SearchNews />} />
          </Route>
          <Route path={"/search/:cari"} exact>
            <BaseView content={<SearchNews />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Routes;
