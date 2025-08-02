<template>
	<div id="app">
		<div style="height:600px;">
			<l-map ref="map" v-model:zoom="zoom" :center="center">
				<l-tile-layer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					layer-type="base"
					name="OpenStreetMap"
				/>
				<l-polyline
					:lat-lngs="firstline.latlngs"
					:color="firstline.color"
				/>
				<l-polyline
					:lat-lngs="secondline.latlngs"
					:color="secondline.color"
				/>
				<l-polyline
					:lat-lngs="thirdline.latlngs"
					:color="thirdline.color"
				/>
				<l-polygon
					:lat-lngs="polygon.latlngs"
					:color="polygon.color"
				/>
			</l-map>
		</div>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {
	LMap,
	LTileLayer
} from "vue2-leaflet";
import { LPolyline,
	LPolygon } from '../index.js'

export default {
	components: {
		LMap,
		LTileLayer,
		LPolygon,
		LPolyline,
	},
	data() {
		return {
			zoom: 11,
			center: [47.31322, -1.319482],
			polygon: {
				latlngs: [
					[-41, 175],
					[35, 140],
					[55, 160],
					[60, -150],
					[37, -122],
					[-30, -70],
				],
				color: "#ff00ff"
			},
			firstline: {
				latlngs: [
					[20.00, 140.0],
					[50.00, -120.0],
					[70.50, 170.0],
				],
				color: "red"
			},
			secondline: { // This one shouldn't cross the antimeridan
				latlngs: [
					[71.7, -42.6],
					[43.2, 76.9],
					[-33.9, 18.4],
				],
				color: "green"
			},
			thirdline: {
				latlngs: [
					[-34.9, -56.1],
					[-33.4, -70.7],
					[-36.9, 174.8],
				],
				color: "blue"
			},
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		};
	},
};
</script>

<style></style>