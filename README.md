# React Tableau Embed Live

Embed your Tableau dashboards with confidence!

# Quickstart

`npm install`

# Demo

To run demo

```bash
# run once
git clone https://github.com/stoddabr/react-tableau-embed-live.git
cd
react-tableau-embed-live
npm install

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
