import { Box, TabPanel } from "@chakra-ui/react";
import { Party } from "../../types/party";
import { AddLootDrawer } from "../loot/AddLootDrawer";
import { LootTable } from "../loot/LootTable";
import { DeletePartyModal } from "./DeletePartyModal";

interface PartyTabPanelProps {
	party: Party;
}

export const PartyTabPanel = ({ party }: PartyTabPanelProps) => {
	return (
		<TabPanel>
			<Box textAlign="left" w="100%">
				<AddLootDrawer party={party} />
				<DeletePartyModal party={party} />
			</Box>
			<LootTable party={party} />
		</TabPanel>
	);
};
