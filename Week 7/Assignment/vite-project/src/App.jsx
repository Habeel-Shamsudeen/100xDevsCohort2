import { useState } from "react";
import { ProfileComponent } from "./componenets/ProfileComponent";
import { ColorPickerBar } from "./componenets/ColorPickerBar";
import { RecoilRoot } from "recoil";
import "./App.css";
import { colourAtom } from "./store/atoms/ColorAtom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
      }}
    >
      <RecoilRoot>
        <ProfileComponent />
        <ColorPickerBar />
      </RecoilRoot>
    </div>
  );
}

export default App;
