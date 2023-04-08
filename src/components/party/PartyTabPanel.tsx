import { TabPanel } from "@chakra-ui/react";
import { Party } from "../../types/party";
import { LootTable } from "../loot/LootTable";

interface PartyTabPanelProps {
	party: Party;
}

export const PartyTabPanel = ({ party }: PartyTabPanelProps) => {
	return (
		<TabPanel>
			<LootTable party={party} />
		</TabPanel>
	);
};
