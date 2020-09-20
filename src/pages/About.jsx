import React from "react";
import Layout from "../layout/Layout";
import { AboutContent } from "../portofolio_sections";

class About extends React.Component {
    render() {
        return (
            <Layout
                allthemeProps={this.props.allProps}
                onTheme={this.props.onThemeChange}
            >
                <AboutContent />
            </Layout>
        );
    }
}

export default About;
