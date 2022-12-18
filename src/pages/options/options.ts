import Options from "./Options.svelte";
import "@material-design-icons/font/outlined.css";
import "../../tailwind.css";
import "../../theme/theme.css";

const content = new Options({
    target: document.getElementById("app"),
});

export default content;
