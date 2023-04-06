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
import { NewPartyForm } from "./NewPartyForm";

interface NewPartyModalProps {
	isOpen: boolean;
	onClose: VoidFunction;
}

export const NewPartyDrawer = () => {
	const nameInputRef = useRef<HTMLInputElement>(null);

	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} size="sm">
				Add Party
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
