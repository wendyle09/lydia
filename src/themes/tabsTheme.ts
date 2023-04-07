import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["tab"]);

const TabsTheme = helpers.defineMultiStyleConfig({
	baseStyle: {
		tab: {
			borderRadius: "0px",
			_focus: {
				outline: "none",
			},
		},
	},
});

export default TabsTheme;
