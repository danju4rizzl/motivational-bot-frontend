import React, { ReactNode } from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

interface MyButtonProps extends ButtonProps {
	children: ReactNode
	type: "button" | "submit" | "reset"
}
const CustomButton: React.FC<MyButtonProps> = ({
	children,
	type,
	...props
}) => {
	return (
		<Button
			bg="brand.200"
			_hover={{ bg: "brand.100" }}
			color="White"
			my={"5"}
			type={type}
			{...props}
		>
			{children}
		</Button>
	)
}

export default CustomButton
