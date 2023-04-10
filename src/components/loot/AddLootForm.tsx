import {
	Button,
	FormControl,
	FormLabel,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Loot } from "../../types/loot";

interface AddLootFormProps {
	item: Loot;
	onClose: VoidFunction;
}

export const AddLootForm = forwardRef<HTMLInputElement, AddLootFormProps>(
	({ item, onClose }, ref) => {
		const addLoot = () => {
			console.log(`Added ${item.name}`);
			//onClose();
		};

		return (
			<form onSubmit={addLoot}>
				<FormControl isRequired>
					<FormLabel>Quantity</FormLabel>
					<NumberInput min={1} defaultValue={item.quantity}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Notes</FormLabel>
					<Input type="text" />
				</FormControl>
				<Button colorScheme="blue" mt="3" type="submit">
					Add
				</Button>
			</form>
		);
	}
);
