import Options from "./Options.svelte";
import "../../tailwind.css";
import "../../theme/theme.css";

const content = new Options({
    target: document.getElementById("app"),
});

export default content;
