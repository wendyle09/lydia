import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { Loot } from "../../types/loot";
import { Party } from "../../types/party";
import { LootTableRow } from "./LootTableRow";

interface LootTableProps {
	party: Party;
}

export const LootTable = ({ party }: LootTableProps) => {
	const loot: Loot[] = [
		{
			id: "1",
			name: "Item 1",
			notes: "Notes about this item",
			quantity: 1,
			sellPrice: 1,
		},
		{
			id: "2",
			name: "Item 2",
			quantity: 2,
			sellPrice: 2,
		},
	];

	return (
		<Table>
			<Thead>
				<Tr>
					<Th></Th>
					<Th>Name</Th>
					<Th>Quantity</Th>
					<Th>Sell Price per Unit (gp)</Th>
					<Th>Notes</Th>
				</Tr>
			</Thead>
			<Tbody>
				{loot.map((item: Loot) => {
					return (
						<LootTableRow item={item} key={item.id} partyName={party.name} />
					);
				})}
			</Tbody>
		</Table>
	);
};
