import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AboutList } from "./about/AboutList";
import { AboutCreate } from "./about/AboutCreate";
import { AboutEdit } from "./about/AboutEdit";
import { AboutShow } from "./about/AboutShow";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { ArticlesList } from "./articles/ArticlesList";
import { ArticlesCreate } from "./articles/ArticlesCreate";
import { ArticlesEdit } from "./articles/ArticlesEdit";
import { ArticlesShow } from "./articles/ArticlesShow";
import { IndexList } from "./index/IndexList";
import { IndexCreate } from "./index/IndexCreate";
import { IndexEdit } from "./index/IndexEdit";
import { IndexShow } from "./index/IndexShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PersonalWebsite"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="About"
          list={AboutList}
          edit={AboutEdit}
          create={AboutCreate}
          show={AboutShow}
        />
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="Articles"
          list={ArticlesList}
          edit={ArticlesEdit}
          create={ArticlesCreate}
          show={ArticlesShow}
        />
        <Resource
          name="Index"
          list={IndexList}
          edit={IndexEdit}
          create={IndexCreate}
          show={IndexShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
      </Admin>
    </div>
  );
};

export default App;
