import {
	Button,
	ButtonProps,
	ChakraComponent,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { Party } from "../../types/party";
import { AddLootForm } from "./AddLootForm";

interface AddLootDrawerProps {
	party: Party;
}

export const AddLootDrawer = ({ party }: AddLootDrawerProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

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
						<AddLootForm onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
