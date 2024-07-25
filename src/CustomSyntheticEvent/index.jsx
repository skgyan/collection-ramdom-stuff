import { createSyntheticEvent } from "react-dom/test-utils";
import { useEffect } from "react";

function triggerCustomEvent(eventName, data) {
  const event = createSyntheticEvent(eventName, {
    bubbles: true,
    cancelable: true,
  });
  event.data = data;
  window.dispatchEvent(event);
}

export default function MyComponent() {
  useEffect(() => {
    window.addEventListener("customEvent", (event) => {
      console.log(event.data);
    });
  }, []);
  return (
    <button
      onClick={() =>
        triggerCustomEvent("customEvent", { message: "Hello, world!" })
      }
    >
      Trigger custom event
    </button>
  );
}
