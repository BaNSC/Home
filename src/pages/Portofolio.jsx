import React from "react";
import Layout from "../layout/Layout";
import { AboutContent, Home } from "../portofolio_sections";

class Portofolio extends React.Component {
  render() {
    return (
      <Layout
        allthemeProps={this.props.allProps}
        onTheme={this.props.onThemeChange}
      >
        <Home />
        <AboutContent />
      </Layout>
    );
  }
}

export default Portofolio;
