import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Portofolio, About, Join } from "./pages";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes/Theme";
import { GlobalStyles } from "./themes/Global";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = {
    theme: "dark",
  };

  handleOnThemeChange = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <Router>
        <ThemeProvider
          theme={this.state.theme === "light" ? darkTheme : lightTheme}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>BaNSC</title>
          </Helmet>
          <GlobalStyles />
          <Switch>
            <Route exact={true} path="/">
              <Portofolio
                allProps={this.state.theme}
                onThemeChange={this.handleOnThemeChange} />
            </Route>
            <Route exact={true} path="/about">
              <About
                allProps={this.state.theme}
                onThemeChange={this.handleOnThemeChange} />
            </Route>
            <Route exact={true} path="/join">
              <Join 
                allProps={this.state.theme}
                onThemeChange={this.handleOnThemeChange}/>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
