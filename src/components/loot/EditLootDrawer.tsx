import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { Loot } from "../../types/loot";
import { EditLootForm } from "./EditLootForm";

interface EditLootDrawerProps {
	item: Loot;
}

export const EditLootDrawer = ({ item }: EditLootDrawerProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<IconButton
				aria-label="Edit item"
				icon={<FaEdit />}
				onClick={onOpen}
				variant="icon"
			/>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>Edit Loot</DrawerHeader>
					<DrawerBody>
						<EditLootForm item={item} onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
