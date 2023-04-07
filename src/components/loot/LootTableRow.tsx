import { IconButton, Td, Tr } from "@chakra-ui/react";
import { Loot } from "../../types/loot";
import { FaEdit } from "react-icons/fa";

interface LootListItemProps {
	item: Loot;
}

export const LootTableRow = ({ item }: LootListItemProps) => {
	return (
		<Tr>
			<Td p={0}>
				<IconButton aria-label="Edit item" icon={<FaEdit />} variant="icon" />
			</Td>
			<Td>{item.name}</Td>
			<Td>{item.quantity}</Td>
			<Td>{item.sellPrice}</Td>
			<Td>{item.notes}</Td>
		</Tr>
	);
};
