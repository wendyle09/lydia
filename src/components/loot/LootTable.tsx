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
			name: "Acid Flask (Moderate)",
			notes:
				"Obtained in session 10; in bag of holdding; lakdsjf ladkslfajsdklfasdjasdjfladjksflajsfkladksjfa sdkaldjksfldklfajsfaj ksd",
			quantity: 1,
			sellPrice: 1,
		},
		{
			id: "2",
			name: "Alchemist's Fire (Moderate)",
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
					<Th>Count</Th>
					<Th maxW={40}>
						Sell Price
						<br />
						per Unit (gp)
					</Th>
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
