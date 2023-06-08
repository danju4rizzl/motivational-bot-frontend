import { Flex, Stack, Hide, Box } from "@chakra-ui/react"
import LinkButton from "../components/UI/LinkButton"
import useUserData from "../hooks/useUserData"
import Logo from "../components/UI/Logo"
import MenuToggler from "../components/MenuToggler"

const Header = () => {
	const user = useUserData()
	// console.log(user)
	return (
		<header>
			{/* Desktop Navigation */}
			<Hide below="md">
				<Flex justifyContent="space-between" alignItems="center" py={5} px={28}>
					<Logo />
					<Stack direction={"row"} spacing={5}>
						{!user ? (
							<LinkButton btnText="login" linkTo="/login" />
						) : (
							<MenuToggler userImgSrc={`${user.avatar_url}`} />
						)}
					</Stack>
				</Flex>
			</Hide>
			{/* Mobile Navigation */}
			<Hide above="md">
				<Flex justify={"space-between"} alignItems={"center"} px={10}>
					<Logo />
					<Box fontSize={"2xl"}>
						{user ? (
							<MenuToggler userImgSrc={`${user?.avatar_url}`} />
						) : (
							<LinkButton btnText="login" linkTo="/login" />
						)}
					</Box>
				</Flex>
			</Hide>
		</header>
	)
}

export default Header
