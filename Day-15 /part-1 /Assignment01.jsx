import { useState } from "react";

export function Assignment01() {
  const [FontChange, setFontChange] = useState({
    fontFamily: "",
    color: "",
    fontSize: 10,
  });

  const [UpdatedFontChange, setUpdatedFontChange] = useState({
    fontFamily: "",
    color: " ",
    fontSize: 10,
  });

  function handleFontFamily(e) {
    setFontChange({
      fontFamily: e.target.value,
      color: FontChange.color,
      fontSize: FontChange.fontSize,
    });
  }
  function handleColorChange(e) {
    setFontChange({
      fontFamily: FontChange.fontFamily,
      color: e.target.value,
      fontSize: FontChange.fontSize,
    });
  }
  function handleRangeChange(e) {
    setFontChange({
      fontFamily: FontChange.fontFamily,
      color: FontChange.color,
      fontSize: e.target.value.toString().concat("px"),
    });
  }

  function handleApplyChange(e) {
    setUpdatedFontChange(FontChange);
  }

  return (
    <>
      <fieldset className="w-25">
        <legend>Text Formatting</legend>
        <dl>
          <dt>Font Family</dt>
          <dd>
            <select className="form-select" onChange={handleFontFamily}>
              <option>Select Font</option>
              <option>Arial</option>
              <option>Algerian</option>
            </select>
          </dd>
          <dt>Font Color</dt>
          <dd>
            <input
              type="color"
              className="form-control-color"
              onChange={handleColorChange}
            />
          </dd>
          <dt>Font Size</dt>
          <dd>
            1
            <input
              type="range"
              min={5}
              max={100}
              className="form-range"
              onChange={handleRangeChange}
            />
            100
          </dd>
        </dl>
        <button className="btn btn-primary" onClick={handleApplyChange}>
          Apply
        </button>
      </fieldset>
      <p className="text-center" style={UpdatedFontChange}>
        Sample Text
      </p>
    </>
  );
}
