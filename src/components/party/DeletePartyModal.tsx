import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Party } from "../../types/party";

interface DeletePartyModalProps {
	party: Party;
}

export const DeletePartyModal = ({ party }: DeletePartyModalProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const onDeleteConfirm = () => {
		console.log(`Deleted ${party.name}`);
		onClose();
	};

	return (
		<>
			<Button
				aria-label="Delete party"
				colorScheme="red"
				leftIcon={<RiDeleteBin2Fill />}
				onClick={onOpen}
				size="sm"
			>
				Delete Party
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete Loot</ModalHeader>
					<ModalBody>
						{`Are you sure you want to delete ${party.name}?`}
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>No</Button>
						<Button colorScheme="red" ml={2} onClick={onDeleteConfirm}>
							Yes, Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
