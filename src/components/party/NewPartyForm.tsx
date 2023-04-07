import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, forwardRef, useState } from "react";

interface NewPartyFormProps {
	onClose: VoidFunction;
}

export const NewPartyForm = forwardRef<HTMLInputElement, NewPartyFormProps>(
	({ onClose }, ref) => {
		const [partyName, setPartyName] = useState("");

		const createParty = () => {
			console.log(`Created ${partyName}`);
			//onClose();
		};

		const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
			setPartyName(e.target.value);
		};

		return (
			<form onSubmit={createParty}>
				<FormControl isRequired>
					<FormLabel>Party Name</FormLabel>
					<Input
						onChange={onInputChange}
						placeholder="Murder Hobos"
						ref={ref}
						type="text"
					/>
				</FormControl>
				<Button colorScheme="blue" mt="1em" type="submit">
					Create
				</Button>
			</form>
		);
	}
);
