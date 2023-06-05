import { Flex, Stack, Hide, Box } from "@chakra-ui/react"

import LinkButton from "../components/UI/LinkButton"

import useUserData from "../hooks/useUserData"
import Logo from "../components/UI/Logo"
import { MdMenu, MdChevronRight } from "react-icons/md"
import MenuToggler from "../components/MenuToggler"

const Header = () => {
	const user = useUserData()

	return (
		<header>
			<Hide below="md">
				<Flex
					justifyContent="space-between"
					alignContent="center"
					py={5}
					px={28}
				>
					<Logo />
					{!user ? (
						<Stack direction={"row"} spacing={5}>
							<LinkButton btnText="login" linkTo="/login" />
						</Stack>
					) : (
						<Stack direction={"row"} spacing={5}>
							<MenuToggler userImgSrc={`${user.avatar_url}`} />
						</Stack>
					)}
				</Flex>
			</Hide>
			<Hide above="md">
				<Flex justify={"space-between"} alignItems={"center"} px={10}>
					<Logo />
					<Box fontSize={"2xl"}>
						{!user && <LinkButton btnText="login" linkTo="/login" />}
						{user && <MenuToggler userImgSrc={`${user?.avatar_url}`} />}
					</Box>
				</Flex>
			</Hide>
		</header>
	)
}

export default Header
