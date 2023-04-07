import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import "./App.css";
import { PartyLootView } from "./components/PartyLootView";
import theme from "./themes/theme";

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<PartyLootView />
		</ChakraProvider>
	);
};

export default App;
