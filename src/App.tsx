import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import "./App.css";
import { PartyLootView } from "./components/PartyLootView";

const App = () => {
	return (
		<ChakraProvider>
			<PartyLootView />
		</ChakraProvider>
	);
};

export default App;
