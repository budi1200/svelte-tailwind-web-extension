import Popup from "./Popup.svelte";
import "@material-design-icons/font/outlined.css";
import "../../tailwind.css";
import "../../theme/theme.css";

const content = new Popup({
    target: document.getElementById("app"),
});

export default content;
