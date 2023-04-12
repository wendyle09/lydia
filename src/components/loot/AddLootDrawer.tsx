import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Equipment } from "../../types/equipment";
import { Loot } from "../../types/loot";
import { Party } from "../../types/party";
import { AddLootForm } from "./AddLootForm";
import { SearchLootBox } from "./SearchLootBox";

interface AddLootDrawerProps {
	party: Party;
}

export const AddLootDrawer = ({ party }: AddLootDrawerProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [searchTerm, setSearchTerm] = useState("");
	const [itemsMatched, setItemsMatched] = useState<Equipment[]>([]);
	const [foundItem, setFoundItem] = useState(false);

	const onSearchTermInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	const queryForItems = () => {
		console.log(`Searching for ${searchTerm}`);
		setItemsMatched([
			{
				_id: "3",
				name: "Composite Shortbow",
				sellPrice: 14,
			},
			{
				_id: "4",
				name: "Shortbow",
				sellPrice: 3,
			},
		]);
	};

	const item: Loot = { id: "3", name: "Shortsword", quantity: 1, sellPrice: 1 };

	return (
		<>
			<Button
				aria-label="Add loot"
				colorScheme="green"
				leftIcon={<GoPlus />}
				mr="2"
				onClick={onOpen}
				size="sm"
			>
				Add Loot
			</Button>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>Add Loot</DrawerHeader>
					<DrawerBody>
						{foundItem ? (
							<AddLootForm item={item} onClose={onClose} />
						) : (
							<SearchLootBox
								itemsMatched={itemsMatched}
								onClose={onClose}
								onSearchTermInput={onSearchTermInput}
								queryForItems={queryForItems}
							/>
						)}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
