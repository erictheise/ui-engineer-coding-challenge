# Hivemapper UI Engineer Coding Challenge

Your first task is to render a point cloud as beautifully as possible. Once you've done that, you need to figure out how to color the point cloud based on altitude.

A basic React app has been set up so that you can focus on coding instead of build tools.

### How to run
Download this repo. If you are going to clone it, do so privately so that nobody else can your answer.

```shell
npm install
npm run transpile # Run each time to recompile your Javascript.
```

Open up `index.html` in your browser.

### About the point cloud
The point cloud provided is a downsampled version of the point clouds that Hivemapper uses to build our map. It is:

- A [PLY](https://en.wikipedia.org/wiki/PLY_(file_format) file.
- Somewhere in San Francisco.
- In the [ECEF](https://en.wikipedia.org/wiki/ECEF) coordinate system.
- Measured in meters ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS_84))
- ASCII version so you can see what the coordinates look like.

`App.jsx` already does the work of loading and parsing the PLY file into a THREE.Geometry.

Feel free to download the PLY file and open it in a viewer like [MeshLab](http://www.meshlab.net/) or [CloudCompare](http://www.danielgm.net/cc/) to see what it looks like.

### Task 1: Render the point cloud
With the THREE.Geometry as a starting point, render this to the screen. There's no right answer here.

Note:

- The ECEF coordinate system doesn't align nicely with any of the scene's axes so the model will look slanted. Can you compensate for this so that the scene looks good?
- WebGL doesn't work well ECEF coordinates (Javascript does), so you will see floating point imprecision in the scene. Can you correct for this?

### Task 2: Color the point cloud based on altitude
`App.jsx` comes with two buttons at the top to switch between color modes. For 'Color By Altitude' please color each point based on it's height above sea level. In the model provided the minimum altitude is 6.65 meters and the maximum is 58.57 meters.

`geo-utils.js` is your friend here.

### Submitting
Please email a zip of this repository, along with any build instructions, to dane@hivemapper.com