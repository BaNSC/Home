import React from "react";
import Layout from "../layout/Layout";
import { Home } from "../portofolio_sections";

class Portofolio extends React.Component {
  render() {
    return (
      <Layout
        allthemeProps={this.props.allProps}
        onTheme={this.props.onThemeChange}
      >
        <Home />
      </Layout>
    );
  }
}

export default Portofolio;
