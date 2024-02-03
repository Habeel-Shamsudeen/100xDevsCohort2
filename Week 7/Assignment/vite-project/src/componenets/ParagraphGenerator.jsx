import { useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { colourAtom } from "../store/atoms/ColorAtom";

export function ParagraphGenerator() {
  const [num, setNum] = useState(0);
  const ALL_WORDS = [
    "energy",
    "appearance",
    "tradition",
    "franchise",
    "recruit",
    "win",
    "wrap",
    "celebration",
    "dominate",
    "issue",
    "folk",
    "rider",
    "define",
    "litigation",
    "account",
    "embark",
    "spectrum",
    "half",
    "charismatic",
    "pier",
    "competition",
    "constitutional",
    "obese",
    "aunt",
    "visit",
    "hospitality",
    "few",
    "producer",
    "pile",
    "personality",
    "lodge",
    "surround",
    "aviation",
    "commerce",
    "paint",
    "daughter",
    "address",
    "mind",
    "mistreat",
    "sweat",
    "pair",
    "trait",
    "decline",
    "survival",
    "able",
    "transfer",
    "dialect",
    "folklore",
    "poison",
    "wreck",
    "discover",
    "innovation",
    "venture",
    "holiday",
    "exquisite",
    "generation",
    "formulate",
    "convince",
    "cooperate",
    "strive",
    "graceful",
    "whisper",
    "legacy",
    "illuminate",
    "fascinate",
    "breathe",
    "quench",
    "enchant",
    "journey",
    "legend",
    "harmony",
    "silhouette",
    "effortless",
    "captivate",
    "manifest",
    "splendid",
    "inspire",
    "resilience",
    "infinity",
    "radiant",
    "adventure",
    "mystical",
    "serenity",
    "blissful",
    "tranquil",
  ];
  const bgColor = useRecoilValue(colourAtom);
  const pTextColor = useMemo(() => {
    if (bgColor === "#333333") {
      return "white";
    } else {
      return "black";
    }
  }, [bgColor]);

  const [clicked, setClicked] = useState(0);
  let para = useMemo(() => {
    let p = "";
    for (let i = 0; i < num; i++) {
      let word = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
      p = p + " " + word;
    }
    return p;
  }, [clicked]);

  return (
    <div>
      <h1>Para Generator</h1>
      <input
        type="text"
        placeholder="Enter the number of Words"
        style={{
          border: "2px solid black",
          borderRadius: "5px",
          height: "40px",
          width: "500px",
          margin: "3px",
          padding: "4px",
          fontSize: "18px",
        }}
        onChange={(e) => {
          const inputValue = parseInt(e.target.value, 10);
          setNum(isNaN(inputValue) || inputValue <= 0 ? 0 : inputValue);
        }}
      />
      <button
        style={{
          color: "white",
          margin: "5px",
          padding: "10px",
        }}
        onClick={() => setClicked(clicked + 1)}
      >
        Generate
      </button>
      <p
        style={{
          fontSize: "18px",
          color: pTextColor,
        }}
      >
        {para}
      </p>
    </div>
  );
}
