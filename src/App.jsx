import React from 'react';
import * as THREE from 'three';
// See https://github.com/mrdoob/three.js/issues/10311 for why the wildcard import is needed.

import PLYLoader from './plyloader.js';
import {ECEFToLonLatAlt} from './geo-utils.js';

const buttonStyle = {
  height: '25px',
  width: '45%',
  verticalAlign: 'top',
  margin: '0 2.5%',
};

export default class App extends React.Component {
  componentDidMount() {
    this.loadModel();
  }

  render() {
    return (
      <span>
        <div id="three-holder" style={
          {
            position: 'absolute',
            top: '40px',
            right: '0',
            bottom: '0',
            left: '0',
            background: 'black',
          }
        }></div>
        <div style={ {height: '40px'} }>
          <button style={buttonStyle}>Color With RGB</button>
          <button style={buttonStyle}>Color By Altitude</button>
        </div>
      </span>
    );
  }

  loadModel() {
    const loader = new PLYLoader();
    loader.load(
      'https://s3.amazonaws.com/web-ui-engineering-challenge/point-cloud.ply',
      (geometry) => {
        // geometry here is an instance of THREE.Geometry
        console.log('loaded geometry', geometry);
      }
    );
  }
}
