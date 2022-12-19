# React Tableau Embed Live

**Embed your Tableau dashboards in React with confidence!**

- **React** is a mid-tier web framework
- **Tableau** is a dashboard tool that needs no introduction but I'll give one anyways. It's a fantastic data exploration tool which empowers anyone who can drag-and-drop to build beautiful data visualizations. Sometimes authors want to share this on a website with an...
- **Embed** places a Tableau dashboard inside of a webpage where others can view and use it using the Tableau Embedding API.
- **Live** previous Tableau libraries contained stale copies of the Tableau source code. This made staying up-to-date difficult so features lagged (often by years), bloated libraries with all that extra source code, and could lead to backward compatibility issues. This version loads the Tableau Embedding API live from the server given in the source URL. Currently, it's optimized for the Tableau Embedding API v3 with backwards compatibility to v2 planned.

[See the demo!](https://stoddabr.github.io/react-tableau-embed-live/)

Other features:

- Typescript support! As much as Tableau gives us. Advanced might encounter `any`-holes and should refer to the [Tableau official type reference](https://help.tableau.com/current/api/embedding_api/en-us/reference/index.html) (i.e., if you're using `vizRef.current` you're advanced). I have asked several times for full Tableau Embed API types and Tableau keeps saying they're "coming soon".
- Both prop-based and event-based callback support! Because, as I have noticed, sometimes events only trigger on one (or none!).

# Quickstart

Install via [npm @stoddabr/react-tableau-embed-live](https://www.npmjs.com/package/@stoddabr/react-tableau-embed-live):

`npm install @stoddabr/react-tableau-embed-live`

Then import, pass a source url and then _badda-bing_ you're in bussiness.

Simple example using a public tableau embedding:

```js
import * as React from "react";
import "./App.css";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function App() {
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>The Tableau Embedded API v3</h1>
      <h3>Now more lightweight, and backwards compatible!</h3>
      <TableauEmbed
        sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
        height={800}
        width={1200}
      />
    </div>
  );
}
export default App;
```

# Demo

An example site lives in the folder `example/react-tableau-embed-live-examples` with useful wrapper components inside of `example/react-tableau-embed-live-examples/src/tableau_examples`.

To run demo on your machine:

```bash
# run once:
#   clone the repo
git clone https://github.com/stoddabr/react-tableau-embed-live.git
#   navigate to example folder
cd example/react-tableau-embed-live-examples
#   install example dependencies
npm i

# run every time:
#   run project in hot-reloading dev-mode
npm run dev
```

# 🏗️ Other documentation under construction 🏗️

# Limitations

**Contributions welcome!!**

- Only backwards comparible to version 3.0
- Lacking full type safety (some types are scrapped from the Tableau source code)
- Props will not update on change
- Filtering not built-in (requires ref callbacks)

If you find anything else please create an issue or ping me on Twitter @sliceofbrett

Please create a PR for a feature (similar to the [FeatureBranch](https://martinfowler.com/bliki/FeatureBranch.html) pattern only with a feature in your fork).
