import { Td, Tr } from "@chakra-ui/react";
import { Loot } from "../../types/loot";

interface LootListItemProps {
	item: Loot;
}

export const LootTableRow = ({ item }: LootListItemProps) => {
	return (
		<Tr>
			<Td>{item.name}</Td>
			<Td>{item.quantity}</Td>
			<Td>{item.sellPrice}</Td>
			<Td>{item.notes}</Td>
		</Tr>
	);
};
