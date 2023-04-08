import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { useContext } from "react";
import { SessionContext } from "../../contexts/session";
import { Party } from "../../types/party";
import { PartyTabPanel } from "./PartyTabPanel";

export const PartyTabs = () => {
	const { parties } = useContext(SessionContext);

	return (
		<Tabs isLazy variant="enclosed-colored">
			<TabList>
				{parties.map(({ id, name }: Party) => {
					return <Tab key={id}>{name}</Tab>;
				})}
			</TabList>
			<TabPanels>
				{parties.map((party: Party) => {
					return <PartyTabPanel party={party} key={party.id} />;
				})}
			</TabPanels>
		</Tabs>
	);
};
