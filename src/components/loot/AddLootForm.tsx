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
	onClose: VoidFunction;
}

export const AddLootForm = forwardRef<HTMLInputElement, AddLootFormProps>(
	({ onClose }, ref) => {
		const addLoot = () => {
			console.log("Saved changes");
			//onClose();
		};

		return (
			<form onSubmit={addLoot}>
				<FormControl isRequired>
					<FormLabel>Item Quantity</FormLabel>
					<NumberInput min={1} defaultValue={1}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Item Notes</FormLabel>
					<Input type="text" />
				</FormControl>
				<Button colorScheme="blue" mt="1em" type="submit">
					Save
				</Button>
			</form>
		);
	}
);
