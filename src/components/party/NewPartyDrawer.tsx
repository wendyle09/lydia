import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { GoPlus } from "react-icons/go";
import { NewPartyForm } from "./NewPartyForm";

export const NewPartyDrawer = () => {
	const nameInputRef = useRef<HTMLInputElement>(null);

	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Button
				colorScheme="green"
				leftIcon={<GoPlus />}
				onClick={onOpen}
				size="sm"
			>
				New Party
			</Button>
			<Drawer initialFocusRef={nameInputRef} isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>New Party</DrawerHeader>
					<DrawerBody>
						<NewPartyForm onClose={onClose} ref={nameInputRef} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
