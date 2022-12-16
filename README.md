# React Tableau Embed Live

Embed your Tableau dashboards with confidence!

- **React** is a mid-tier web framework
- **Tableau** is a dashboard tool that needs no introduction but I'll give one anyways. It's a fantastic data exploration tool which empowers anyone who can drag-and-drop to build beautiful data visualizations. Sometimes authors want to share this on a website with an...
- **Embed** places a Tableau dashboard inside of a webpage where others can view and use it using the Tableau Embedding API.
- **Live** previous Tableau libraries contained stale copies of the Tableau source code. This made staying up-to-date difficult so features lagged (often by years), bloated libraries with all that extra source code, and could lead to backward compatibility issues. This version loads the Tableau Embedding API live from the server given in the source URL. Currently, it's optimized for the Tableau Embedding API v3 with backwards compatibility to v2 planned.

Other features:

- Typescript support! As much as Tableau gives us. Advanced might encounter `any`-holes and should refer to the [Tableau official type reference](https://help.tableau.com/current/api/embedding_api/en-us/reference/index.html) (i.e., if you're using `vizRef.current` you're advanced). I have asked several times for full Tableau Embed API types and Tableau keeps saying they're "coming soon".
- Both prop-based and event-based callback support! Because, as I have noticed, sometimes events only trigger on one (or none!).

# Quickstart

`npm install @stoddabr/react-tableau-embed-live`

# Demo

To run demo (coming soon to github pages...)

```bash
# run once
git clone https://github.com/stoddabr/react-tableau-embed-live.git
cd
react-tableau-embed-live
npm install @stoddabr/react-tableau-embed-live

# run every time
npm run dev
```

# 🏗️ Documentation under construction 🏗️

Simplest example:

```js
import * as React from "react";
import "./App.css";
import { TableauEmbed } from "react-tableau-embed-live";

function App() {
  const vizRef = React.useRef<any>();

  return (
    <div className="App">
      <h1>The Tableau Embedded API v3</h1>
      <h3>Now more lightweight, and backwards compatible!</h1>
      <TableauEmbed
        sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
        version="latest" // backward compatiable!
      />
    </div>
  );
}

export default App;
```

# Limitations

**Contributions welcome!!**

- Only backwards comparible to version 3.0
- Lacking full type safety (some types are scrapped from the Tableau source code)
- Props will not update on change
- Filtering not built-in (requires ref callbacks)
