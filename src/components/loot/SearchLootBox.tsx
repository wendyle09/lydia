import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Loot } from "../../types/loot";

interface AddLootFormProps {
	onClose: VoidFunction;
}

export const SearchLootBox = forwardRef<HTMLInputElement, AddLootFormProps>(
	({ onClose }, ref) => {
		return (
			<Box>
				<FormControl>
					<FormLabel>Item Name</FormLabel>
					<Input placeholder="Alchemist's fire" type="text" />
				</FormControl>
				<Button colorScheme="blue" mt="3">
					Search
				</Button>
				<Button ml="1" mt="3">
					Cancel
				</Button>
			</Box>
		);
	}
);
