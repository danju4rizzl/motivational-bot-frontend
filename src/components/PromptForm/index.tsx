// Import necessary libraries and components
import { useState, FormEvent } from "react"
import { useForm, FormProvider } from "react-hook-form"
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

import { useMutation } from "@tanstack/react-query"
import { postPrompt } from "../../utils"
import appConfig from "../../config/appConfig"

// Define the interface for the PromptForm component's props
interface PromptFormProps {
	onServerData: (data: any) => void
}

// Define the PromptForm component
const PromptForm: React.FC<PromptFormProps> = ({ onServerData }) => {
	// Initialize the useForm hook
	const { register, handleSubmit } = useForm()

	// Configure the postPromptMutation using react-query
	const postPromptMutation = useMutation(postPrompt, {
		onSuccess: (data) => {
			console.log(" data from server:", data)
			onServerData(data)
		},
		onError: (error) => {
			console.log(error)
			alert("Something went wrong, check the server 🔴")
		}
	})

	// Define the handleSubmitForm function to handle form submission
	function handleSubmitForm(data: any) {
		console.log("data", data)
		const { tone, assistant, format } = data

		// Call the postPromptMutation with the form data
		postPromptMutation.mutate({
			prompt: data.prompt,
			route: assistant,
			tone,
			format
		})
	}

	const methods = useForm()

	// Render the form with the necessary form elements
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<FormControl>
					<FormLabel htmlFor="Prompt">Write your prompt</FormLabel>
					<Textarea
						id="Prompt"
						height={{ base: 50, md: 210 }}
						placeholder="I want to you to write a blog about Business Intelligence."
						{...register("prompt", { required: true, maxLength: 2501 })}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>How do you want to sound</FormLabel>
					<Select placeholder="Select option" {...register("tone")}>
						{appConfig.promptConfig.toneOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl>
					<FormLabel>Which assistant do you want use</FormLabel>
					<Select placeholder="Select option" {...register("assistant")}>
						{appConfig.promptConfig.assistantOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl>
					<FormLabel>How do you want to show results</FormLabel>
					<Select placeholder="Select option" {...register("format")}>
						{appConfig.promptConfig.formatOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<Button colorScheme="teal" my={"5"} type="submit">
					Send
				</Button>
			</form>
		</FormProvider>
	)
}

// Export the PromptForm component
export default PromptForm
