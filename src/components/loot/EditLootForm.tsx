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

interface EditLootFormProps {
	item: Loot;
	onClose: VoidFunction;
}

export const EditLootForm = forwardRef<HTMLInputElement, EditLootFormProps>(
	({ item, onClose }, ref) => {
		const saveEdits = () => {
			console.log("Saved changes");
			//onClose();
		};

		return (
			<form onSubmit={saveEdits}>
				<FormControl isRequired>
					<FormLabel>Item Quantity</FormLabel>
					<NumberInput min={1} defaultValue={item.quantity}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Item Notes</FormLabel>
					<Input type="text" defaultValue={item.notes} />
				</FormControl>
				<Button colorScheme="blue" mt="3" type="submit">
					Save
				</Button>
			</form>
		);
	}
);
