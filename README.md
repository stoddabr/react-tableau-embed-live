# React Tableau Embed Live

[See the demo!](https://stoddabr.github.io/react-tableau-embed-live/)

**Embed your Tableau dashboards in React with confidence!**

- **React** is a mid-tier web framework
- **Tableau** is a dashboard tool that needs no introduction but I'll give one anyways. It's a fantastic data exploration tool which empowers anyone who can drag-and-drop to build beautiful data visualizations. Sometimes authors want to share this on a website with an...
- **Embed** places a Tableau dashboard inside of a webpage where others can view and use it using the Tableau Embedding API.
- **Live** previous Tableau libraries contained stale copies of the Tableau source code. This made staying up-to-date difficult so features lagged (often by years), bloated libraries with all that extra source code, and could lead to backward compatibility issues. This version loads the Tableau Embedding API live from the server given in the source URL. Currently, it's optimized for the Tableau Embedding API v3 with backwards compatibility to v2 planned.

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
      <TableauEmbed sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita" />
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

# 🏗️ documentation under construction 🏗️

# Props

Note: some props require odd syntax to pass due to how tableau has hyphenated fields which JS is allergic to. To sidestep future compatibility issues, this library recommends using an odd syntax which involes spreading a temporary object. An example of this syntax can be seen in the simple example below with `hide-tabs`.

```js
<TableauEmbed
  sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
  {...{ "hide-tabs": true }}
/>
```

["hide-tabs"] - note: to set to false (and show tabs), pass `undefined` not `false`. Tableau's API appears to cast this prop to a string which makes `false`-> `"false"` -> which is truthy (i.e., `boolean("false") === true` is true).

# Styling

The styles of the parent component of `TableauEmbed` is important and tricky to get correct.
By default, without any height/width props passed, it will take up the height/width in the parent container.
However, this will only happen if the tableau dashboard being embedded is NOT set to fixed mode or the size it's attempting is larger than it's range ([tableau docs](https://help.tableau.com/current/pro/desktop/en-us/dashboards_organize_floatingandtiled.htm)).
Fixed dashboards should always be set to their exact dimensions and then scaled using JS/CSS transforms ([for example, "the react way" in this article](https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4)).

Prior updates of the Tableau Embedded API have broken this styling (specifically v3.2 -> v3.4).
It's recommended for any project using this library to implement integration-level snapshot tests that check to ensure the `TableauEmbed` component is styled correctly.

# Licences

When using this library ensure you are following Tableau's licensing agreement.

# Limitations

- Only backwards comparible down to Tableau Embed API v3.0 (i.e., later than (Tableau server v2021.4)[https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_get.html])
- Lacking full type safety (some types are scrapped from the Tableau source code)
- Filtering not built-in (requires ref callbacks)
- No tests!!!
- Attempting to print the page when exporting an embedded tableau dashboard will not work. If you need to do this, consider using the Tableau REST API to generate an image. Most pdf-from-DOM-snapshot libraries will not work either (if you get one working, please please create a PR to update this readme).

If you discover anything other limitations please create an issue, and/or ping me on Twitter: @sliceofbrett

# Contributions

**Contributions welcome!!**

To contribute, please fork, then create an atomic PR that describes the fix or feature. If you're not sure what to contribute, see the above list of limitations, or any open issues without an active dev branch.

This project is setup with some CICD github actions to make this process easier. Every push request will trigger actions to increment the npm patch version, build the project, publish the project to npm, build the examples site, and then publishes the example site to a dedicated branch.
