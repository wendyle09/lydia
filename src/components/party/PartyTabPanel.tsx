import { TabPanel } from "@chakra-ui/react";
import { LootTable } from "../loot/LootTable";

interface PartyTabPanelProps {
	partyId: string;
}

export const PartyTabPanel = ({ partyId }: PartyTabPanelProps) => {
	return (
		<TabPanel>
			<LootTable partyId={partyId} />
		</TabPanel>
	);
};
