import { Td, Tr } from "@chakra-ui/react";
import { Loot } from "../../types/loot";
import { DeleteLootModal } from "./DeleteLootModal";
import { EditLootDrawer } from "./EditLootDrawer";

interface LootListItemProps {
	item: Loot;
	partyName: string;
}

export const LootTableRow = ({ item, partyName }: LootListItemProps) => {
	return (
		<Tr>
			<Td p={0}>
				<EditLootDrawer item={item} />
				<DeleteLootModal item={item} partyName={partyName} />
			</Td>
			<Td>{item.name}</Td>
			<Td>{item.quantity}</Td>
			<Td>{item.sellPrice}</Td>
			<Td>{item.notes}</Td>
		</Tr>
	);
};
