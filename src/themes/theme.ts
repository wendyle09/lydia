import { extendTheme } from "@chakra-ui/react";
import ButtonTheme from "./buttonTheme";
import TabsTheme from "./tabsTheme";

const theme = extendTheme({
	components: {
		IconButton: ButtonTheme,
		Tabs: TabsTheme,
	},
});

export default theme;
