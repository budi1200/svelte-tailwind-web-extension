import Popup from "./Popup.svelte";
import "../../tailwind.css";
import "../../theme/theme.css";

const content = new Popup({
    target: document.getElementById("app"),
});

export default content;
