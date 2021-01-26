import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: yellow[500],
		},
	},
});

export default theme;
