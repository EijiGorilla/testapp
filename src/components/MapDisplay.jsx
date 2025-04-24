import { useEffect, useState } from "react";
import "../index.css";
import "../App.css";
import "@arcgis/map-components/dist/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-layer-list";
import {
  structureLayer,
  pierAccessLayer,
  stationLayer,
  prowLayer,
  alignmentGroupLayer,
  nloLoOccupancyGroupLayer,
  lotGroupLayer,
  ngcp2_groupLayer,
} from "../layers";

function MapDisplay() {
  const [sceneView, setSceneView] = useState();
  const arcgisScene = document.querySelector("arcgis-scene");
  // zoomToLayer(prowLayer, arcgisScene);

  useEffect(() => {
    if (sceneView) {
      arcgisScene.map.add(pierAccessLayer);
      arcgisScene.map.add(lotGroupLayer);
      arcgisScene.map.add(ngcp2_groupLayer);
      arcgisScene.map.add(structureLayer);
      arcgisScene.map.add(nloLoOccupancyGroupLayer);
      arcgisScene.map.add(alignmentGroupLayer);
      arcgisScene.map.add(prowLayer);
      arcgisScene.map.add(stationLayer);
    }
  });

  return (
    <arcgis-scene
      // item-id="5ba14f5a7db34710897da0ce2d46d55f"
      basemap="dark-gray-vector"
      viewingMode="local"
      zoom="10"
      center="120.5793, 15.18"
      onarcgisViewReadyChange={(event) => {
        setSceneView(event.target);
      }}
    >
      {/* <arcgis-zoom position="top-right"></arcgis-zoom> */}
    </arcgis-scene>
  );
}

export default MapDisplay;
