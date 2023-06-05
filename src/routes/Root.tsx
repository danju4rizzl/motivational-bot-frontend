import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"
import App from "../App"
import useUserData from "../hooks/useUserData"
import { Box } from "@chakra-ui/react"

const Root = () => {
	const loggedInUser = useUserData()

	return (
		<Box bg={"gray.100"}>
			<Header />
			{loggedInUser ? <App /> : <Outlet />}
		</Box>
	)
}
export default Root
