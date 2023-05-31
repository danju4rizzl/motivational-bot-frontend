import { Link as ReactLinks } from "react-router-dom"
import { Link } from "@chakra-ui/react"
interface LinkButtonProps {
	text: string
	linkTo: string
	textColor?: string
	isOutline?: boolean
}

const LinkButton = ({
	text,
	linkTo,
	textColor,
	isOutline
}: LinkButtonProps) => {
	return (
		<Link
			as={ReactLinks}
			to={linkTo}
			display={"flex"}
			alignItems={"center"}
			fontSize={"md"}
			fontWeight={"semibold"}
			textTransform={"capitalize"}
			bg={!isOutline ? "teal" : ""}
			color={textColor || "white"}
			border={isOutline ? "1px solid currentColor" : ""}
			rounded={"base"}
			px={5}
			_hover={{
				bg: `${!isOutline ? "teal.500" : ""}`
			}}
		>
			{text}
		</Link>
	)
}
export default LinkButton
