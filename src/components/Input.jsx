import { useState } from "react";
import { fetchData } from "../utils/fetchData";

const Input = ({ song }) => {
  const [title, setTitle] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const updateText = {
    EN: "Text Saved",
    ES: "Texto guardado",
    IT: "Testo salvato",
    FR: "Texte sauvegardé",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      await fetchData({ title, lang: song.artists });
      setTitle(updateText[song.artists]);
    };
    if (title) {
      setIsRequired(false);
      fetch();
    } else {
      setIsRequired(true);
    }
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          className="text-black"
          required
        />
        {isRequired && <div className="text-red-400">Required</div>}
      </div>
      <button type="button" onClick={onSubmit}>
        Send
      </button>
    </div>
  );
};

export default Input;
