// PromptForm.tsx
import { useState, ChangeEvent, FormEvent } from "react"
import { useForm } from "react-hook-form"

import {
	FormControl,
	FormLabel,
	Textarea,
	Input,
	Button,
	RadioGroup,
	Radio,
	Select
} from "@chakra-ui/react"
import PromptInput from "./PromptInput"

import { useMutation } from "@tanstack/react-query"

import { postPrompt } from "../../utils"

// Export this to a separate file to configure the options

interface PromptFormProps {
	onServerData: (data: any) => void
}

const PromptForm: React.FC<PromptFormProps> = ({ onServerData }) => {
	const [prompt, setPrompt] = useState("")

	const postPromptMutation = useMutation(postPrompt, {
		onSuccess: (data) => {
			onServerData(data)
		},
		onError: (error) => {
			console.log(error)
		}
	})

	const tones = [
		"Confident",
		"Engaging",
		"Professional",
		"Conversational",
		"Custom"
	]

	// post the prompt to request to the backend using react-query
	function handlePromptChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setPrompt(e.target.value)
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		// Todo: add the tone to the request and make add radio for each route with a loop
		postPromptMutation.mutate({ prompt, route: "private" })
	}

	return (
		<form onSubmit={handleSubmit}>
			<PromptInput prompt={prompt} onPromptChange={handlePromptChange} />

			<FormControl>
				<FormLabel>Select our tone</FormLabel>
				<Select placeholder="Select option">
					{tones.map((tone) => (
						<option key={tone} value={tone}>
							{tone}
						</option>
					))}
				</Select>
			</FormControl>

			<Button colorScheme="teal" my={"5"} type="submit">
				Send
			</Button>
		</form>
	)
}

export default PromptForm
