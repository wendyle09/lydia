import { Box, HStack } from "@chakra-ui/react";
import { SessionContext } from "../contexts/session";
import { Party } from "../types/party";
import { NewPartyDrawer } from "./party/NewPartyDrawer";
import { PartyTabs } from "./party/PartyTabs";

export const PartyLootView = () => {
	const parties: Party[] = [
		{
			id: "1",
			name: "Party 1",
			creationTimestamp: Date.now(),
		},
		{
			id: "2",
			name: "Party 2",
			creationTimestamp: Date.now(),
		},
	];

	return (
		<SessionContext.Provider value={{ parties }}>
			<Box mb="3" textAlign="left" w="100%">
				<NewPartyDrawer />
			</Box>
			<PartyTabs />
		</SessionContext.Provider>
	);
};
