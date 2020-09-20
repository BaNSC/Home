import React from "react";
import Layout from "../layout/JoinLayout";
import Iframe from "react-iframe"

class Join extends React.Component {
    render() {
        return (
            <Layout
                allthemeProps={this.props.allProps}
                onTheme={this.props.onThemeChange} >
                <div className="mt-0 pt-0">
                    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSd009eXfp70M51018XtuGlmfRo5zrhHSYj5_DBQDeqmmH5NUw/viewform?embedded=true"
                        width="100%" 
                        height="1500"
                        frameBorder="0" 
                        marginheight="0" 
                        marginwidth="0"
                        display="initial"
                        position="relative" />
                </div>
            </Layout>
        );
    }
}

export default Join;
