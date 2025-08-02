<template></template>
<script>
import { optionsMerger, propsBinder, findRealParent } from 'vue2-leaflet/src/utils/utils.js';
import { DomEvent } from 'leaflet';
import { LPolygon } from 'vue2-leaflet';
import { Polygon } from 'Leaflet.Antimeridian/src/Leaflet.Antimeridian';

export default {
  name: 'LPolygon',
  mixins: LPolygon.mixins,
  props: LPolygon.props,
  data: LPolygon.data,
  mounted() {
    const options = optionsMerger(this.polygonOptions, this);
    this.mapObject = new Polygon(this.latLngs, options);
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