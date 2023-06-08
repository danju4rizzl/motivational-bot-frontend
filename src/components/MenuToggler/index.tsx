import {
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Tooltip
} from "@chakra-ui/react"
import { BsRobot } from "react-icons/bs"
import supabase from "../../config/supabaseClient"
import LinkButton from "../UI/LinkButton"

interface MenuTogglerProps {
	userImgSrc: string
}

const MenuToggler = ({ userImgSrc }: MenuTogglerProps) => {
	// This will log the user out of firebase then reload the page
	const handleLogout = () =>
		supabase.auth.signOut().then(() => window.location.reload())

	return (
		<Menu>
			<Tooltip hasArrow label={"View Options"} p={3} rounded={"md"}>
				<MenuButton
					as={Avatar}
					cursor="pointer"
					name="Deejay Dev"
					src={userImgSrc}
					loading="lazy"
					size={"sm"}
				/>
			</Tooltip>
			<MenuList>
				<MenuItem display={"flex"} justifyContent={"center"} gap={2}>
					Build Your Own
					<BsRobot />
				</MenuItem>
				<MenuItem>
					<LinkButton btnText="Logout" onClick={handleLogout} />
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default MenuToggler
