import React, { Component } from 'react';
import ScriptLoader from 'react-script-loader-hoc';

class AdSense extends Component {
  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3182119963461273"
        data-ad-slot="5090308096"
        data-ad-format="fluid"
        data-ad-layout-key="-gw-3+1f-3d+2z"
      />
    );
  }
}

export default ScriptLoader(
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
)(AdSense);