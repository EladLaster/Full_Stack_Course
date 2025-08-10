import { useState } from "react";

export function Exercise1(){
    const [state,setState] = useState({
      images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
      currentImg: 0
    }
)
    function shiftImageBack (){
        setState((prev) => ({
      ...prev,
      currentImg: prev.currentImg > 0 ? prev.currentImg - 1 : prev.currentImg,
    }));
    }
    function shiftImageForward (){
        setState((prev) => ({
      ...prev,
      currentImg: prev.currentImg < prev.images.length - 1 ? prev.currentImg + 1 : prev.currentImg,
    }));
    }

    return (
        <div>
      <button onClick={shiftImageBack}>Previous</button>
      <img
        src={state.images[state.currentImg]}
        alt="Gallery"
        style={{ width: 300, height: 300 }}
      />
      <button onClick={shiftImageForward}>Next</button>
    </div>

    )
}