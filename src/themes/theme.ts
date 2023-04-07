import { extendTheme } from "@chakra-ui/react";
import TabsTheme from "./tabsTheme";

const theme = extendTheme({
	components: {
		Tabs: TabsTheme,
	},
});

export default theme;
