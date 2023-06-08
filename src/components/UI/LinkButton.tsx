import { Link as ReactLinks } from "react-router-dom"
import { Link } from "@chakra-ui/react"

interface LinkButtonProps {
	btnText: string
	linkTo?: string
	textColor?: string
	isOutline?: boolean
	reloadPage?: boolean
	onClick?: () => void
}

const LinkButton = ({
	btnText,
	linkTo,
	textColor,
	isOutline,
	onClick,
	reloadPage
}: LinkButtonProps) => {
	return (
		<Link
			as={ReactLinks}
			to={linkTo}
			display={"grid"}
			placeItems={"center"}
			w={"full"}
			px={5}
			py={1}
			fontWeight={"semibold"}
			textTransform={"capitalize"}
			bg={!isOutline ? "brand.300" : ""}
			color={textColor || "white"}
			border={isOutline ? "1px solid currentColor" : ""}
			rounded={"base"}
			_hover={{
				bg: `${!isOutline ? "brand.500" : ""}`
			}}
			onClick={onClick}
			reloadDocument={reloadPage}
		>
			{btnText}
		</Link>
	)
}
export default LinkButton
