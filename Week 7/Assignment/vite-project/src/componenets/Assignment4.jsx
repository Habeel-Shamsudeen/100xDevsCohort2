import { ProfileComponent } from "./ProfileComponent";
import { ColorPickerBar } from "./ColorPickerBar";
import { RecoilRoot } from "recoil";
import { ParagraphGenerator } from "./ParagraphGenerator";
export default function Assignment4() {
  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RecoilRoot>
        <ProfileComponent />
        <ColorPickerBar />
        <ParagraphGenerator />
      </RecoilRoot>
    </div>
  );
}
