---
sidebar_position: 10
---

## Hexagon-Based Geographical Partitioning

![hex](https://raw.githubusercontent.com/MXCzkEVM/SupernodeV2-devdocs/main/docs/Tutorials/img/name-hexagon/step2/getHexagonAddress.png)


### Concept Overview:
- **World Segmentation**: Divides the world into approximately 98 million hexagonal cells.
- **Hexagon Dimensions**: Each hexagon covers an area of roughly 5 km², with a diameter of about 2 km.
- **Origin Point**: The hexagonal grid originates in Berlin, Germany, serving as the anchor point for this global grid system.

### Technical Details:
- **H3 Geospatial Indexing**: Utilizes the H3 Geospatial Indexing Framework, as detailed on [H3Geo's documentation](https://h3geo.org/docs/core-library/restable/).
- **Resolution Choice**: MXC has selected 'Resolution 7' for this grid, balancing granularity and computational efficiency.
- **Balance of Detail and Efficiency**: The resolution choice balances the detail of geospatial data and the processing efficiency.

## Privacy Considerations

### Key Feature:
- **Privacy through Hexagons**: Enhanced privacy through hexagon-based geolocation.
- **Hexagon ID Sharing**: Users share only their hexagon ID, not precise coordinates.

### Privacy Mechanism:
- **Location Ambiguity**: By sharing just a hexagon ID, an individual's exact location remains ambiguous within a 5 km² area.
- **Reduced Tracking Risk**: This system significantly reduces the risk of location tracking and personal data exposure.

## Web3 Integration

### Core Concept:
- **Web3 Native Design**: The system is inherently Web3-oriented, integrating seamlessly with decentralized technologies.
- **Unique Hexagon Identification**: Hexagons can be uniquely identified and interacted with using MXC domain names (e.g., berlin.mxc).

### Applications:
- **Infrastructure for DApps**: Provides a robust infrastructure for DApps (Decentralized Applications) focusing on geolocation-based services.
- **Innovative Applications**: Enables innovative applications such as secure tracking systems and decentralized Point of Interest (DePIN) inscriptions.

## Location Conversion Mechanics

ES6 usage:

```js
import {latLngToCell} from "h3-js";
```

CommonJS usage:

```js
const h3 = require("h3-js");
```

Pre-bundled script (library is available as an `h3` global):

```html
<script src="https://unpkg.com/h3-js"></script>
```

### Core functions

```js
// Convert a lat/lng point to a hexagon index at resolution 7
const h3Index = h3.latLngToCell(37.3615593, -122.0553238, 7);
// -> '87283472bffffff'

// Get the center of the hexagon
const hexCenterCoordinates = h3.cellToLatLng(h3Index);
// -> [37.35171820183272, -122.05032565263946]

// Get the vertices of the hexagon
const hexBoundary = h3.cellToBoundary(h3Index);
// -> [ [37.341099093235684, -122.04156135164334 ], ...]
```


## Name a hexagon

The hexagons can be indexed and named using MNS : https://doc.mxc.com/docs/Tutorials/name-hexagon#5-navigate-back-to-wannsee-mns-and-set-hexagon-to-your-domain-name

## DePINscriptions

Hexagons are used to inscribe the DePINscriptions, enabling national pride for each country and region to trade their geographical inscriptions : https://depinscriptions.mxc.com/market
