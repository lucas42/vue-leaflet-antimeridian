<template></template>
<script>
import { optionsMerger, propsBinder, findRealParent } from 'vue2-leaflet/src/utils/utils.js';
import { DomEvent } from 'leaflet';
import { LPolyline } from 'vue2-leaflet';
import { Polyline } from 'Leaflet.Antimeridian/src/Leaflet.Antimeridian';

export default {
  name: 'LPolyline',
  mixins: LPolyline.mixins,
  props: LPolyline.props,
  data: LPolyline.data,
  mounted() {
    const options = optionsMerger(this.polyLineOptions, this);
    this.mapObject = new Polyline(this.latLngs, options);
    DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(() => {
      /**
       * Triggers when the component is ready
       * @type {object}
       * @property {object} mapObject - reference to leaflet map object
       */
      this.$emit('ready', this.mapObject);
    });
  },
};
</script>