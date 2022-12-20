import * as React from "react";
import "./App.css";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

interface TableauPropsEditor {
  height: number;
  width: number;
  "hide-tabs"?: boolean;
  sourceUrl: string;
}

const defaultProps = {
  height: 500,
  width: 500,
  // "hide-tabs": false,
  sourceUrl: "https://public.tableau.com/views/WorldIndicators/GDPpercapita",
};

function InteractiveProps() {
  const [props, setProps] = React.useState<TableauPropsEditor>(defaultProps);
  const [draft, setDraft] = React.useState<TableauPropsEditor>(defaultProps);

  const handleChange: React.ChangeEventHandler<any> = (e) => {
    console.log({ e });
    const name = e.target.name;
    const value = e.target.value;
    if (name === "hide-tabs") {
      setDraft((values) => ({
        ...values,
        [name]: !draft["hide-tabs"] ? true : undefined,
      }));
      return;
    }
    setDraft((values) => ({ ...values, [name]: value }));
  };

  const updateProps = () => {
    setProps(draft);
  };

  return (
    <div className="App">
      <h3>Update Props</h3>
      <form
        className="props-form"
        onSubmit={(e) => {
          updateProps();
          e.preventDefault();
        }}
      >
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={draft.height || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={draft.width || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Hide-tabs:
          <input
            type="checkbox"
            name="hide-tabs"
            checked={draft["hide-tabs"]}
            onChange={handleChange}
          />
        </label>
        <label>
          Source:
          <input
            type="text"
            name="sourceUrl"
            value={draft.sourceUrl || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Update Props" className="button" />
      </form>
      <div style={{ height: 30 }} />

      <TableauEmbed {...props} />

      <div>
        <h3>Active props:</h3>
        <p>{JSON.stringify(props)}</p>
      </div>
    </div>
  );
}

export default InteractiveProps;
