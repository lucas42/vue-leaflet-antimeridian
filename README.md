# vue-leaflet-antimeridian
An antimeridian plugin extension for the vue-leaflet package

## Description
This plugin wraps the [Leaflet.Antimeridian](https://github.com/briannaAndCo/Leaflet.Antimeridian) component and makes it available for vue2-leaflet.
Using this will better handle any lines or polygons which pass over the 180th meridian.

## Usage

Import `LPolygon` or `LPolyline` from this package and use as drop-in replacements for the default components in vue2-leaflet.

## Example
There is a rough example in the `example` directory.  To see this working locally, run:

* `npm install`
* `npm run example`

## Caveats

* At the time of writing, [Leaflet.Antimeridian](https://github.com/briannaAndCo/Leaflet.Antimeridian) hadn't seen any updates since 2017.
* The author of vue-leaflet-antimeridian has no prior experience of using vue or leaflet.
* Vue 2 reached its [End of Life](https://v2.vuejs.org/eol/) in 2023