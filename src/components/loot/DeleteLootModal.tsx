import {
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Loot } from "../../types/loot";

interface DeleteLootModalProps {
	item: Loot;
	partyName: string;
}

export const DeleteLootModal = ({ item, partyName }: DeleteLootModalProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<IconButton
				aria-label="Delete item"
				colorScheme="red"
				h={8}
				icon={<RiDeleteBin2Line />}
				minW={8}
				onClick={onOpen}
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete Loot</ModalHeader>
					<ModalBody>
						{`Are you sure you want to delete all ${item.quantity} count of ${item.name}
						from ${partyName}?`}
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>No</Button>
						<Button colorScheme="red" ml={2}>
							Yes, Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
