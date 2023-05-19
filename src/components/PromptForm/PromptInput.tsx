// PromptInput.tsx
import { ChangeEvent } from "react"
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react"

interface PromptInputProps {
	prompt: string
	onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const PromptInput: React.FC<PromptInputProps> = ({
	prompt,
	onPromptChange,
	...props
}) => {
	const onPressedEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			// e.preventDefault()
			console.log("pressed enter")
		}
	}

	return (
		<FormControl>
			<FormLabel htmlFor="prompt">Write your prompt</FormLabel>
			<Textarea
				id="prompt"
				placeholder="What would you like to know"
				height={{ base: 50, md: 210 }}
				onChange={onPromptChange}
				onKeyDown={onPressedEnter}
				value={prompt}
				{...props}
			/>
		</FormControl>
	)
}

export default PromptInput
