import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Equipment } from "../../types/equipment";

interface AddLootFormProps {
	itemsMatched: Equipment[];
	onClose: VoidFunction;
	onSearchTermInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	queryForItems: VoidFunction;
}

export const SearchLootBox = forwardRef<HTMLInputElement, AddLootFormProps>(
	({ itemsMatched, onClose, onSearchTermInput, queryForItems }, ref) => {
		return (
			<Box>
				<FormControl>
					<FormLabel>Item Name</FormLabel>
					<Input
						onInput={onSearchTermInput}
						placeholder="Alchemist's fire"
						type="text"
					/>
				</FormControl>
				<Button colorScheme="blue" mt="3" onClick={queryForItems}>
					Search
				</Button>
				<Button ml="2" mt="3" onClick={onClose}>
					Cancel
				</Button>
			</Box>
		);
	}
);
