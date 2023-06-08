import { useForm, FormProvider } from "react-hook-form"
import {
	FormControl,
	FormLabel,
	Textarea,
	Select,
	Grid
} from "@chakra-ui/react"

import { useMutation } from "@tanstack/react-query"
import { postPrompt } from "../../utils"
import appConfig from "../../config/appConfig"
import CustomButton from "../UI/CustomButton"

// Define the interface for the PromptForm component's props
interface PromptFormProps {
	onServerData: (data: any) => void
}

// Define the PromptForm component
const PromptForm: React.FC<PromptFormProps> = ({ onServerData }) => {
	// Initialize the useForm hook
	const { register, handleSubmit } = useForm()
	const methods = useForm()

	// Configure the postPromptMutation using react-query
	const postPromptMutation = useMutation(postPrompt, {
		onSuccess: (data) => {
			// console.log(" data from server:", data)
			onServerData(data)
		},
		onError: (error) => {
			console.log(error)
			alert("Something went wrong, check the server 🔴")
		}
	})

	// Define the handleSubmitForm function to handle form submission
	function handleSubmitForm(data: any) {
		// console.log("data", data)
		const { tone, assistant, format } = data

		// Call the postPromptMutation with the form data
		postPromptMutation.mutate({
			prompt: data.prompt,
			route: assistant,
			tone,
			format
		})
	}

	// Render the form with the necessary form elements
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<FormControl>
					<FormLabel htmlFor="promptInput">Write your prompt</FormLabel>
					<Textarea
						id="promptInput"
						height={{ base: 50, md: 210 }}
						fontSize={18}
						color={"blackAlpha.800"}
						_focus={{
							border: "none",
							fontSize: 20
						}}
						transition="font 0.3s ease-in"
						placeholder="I want to you to write a blog about Business Intelligence."
						{...register("prompt", { required: true, maxLength: 2501 })}
					/>
				</FormControl>
				<FormControl my={5}>
					<FormLabel>Which assistant would you like to use</FormLabel>
					<Select placeholder="Select option" {...register("assistant")}>
						{appConfig.promptConfig.assistantOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl my={5}>
					<FormLabel>
						What type of tone would you like to use (optional)
					</FormLabel>
					<Select placeholder="Select option" {...register("tone")}>
						{appConfig.promptConfig.toneOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl my={5}>
					<FormLabel>
						How do you want to view your responses (optional)
					</FormLabel>
					<Select placeholder="Select option" {...register("format")}>
						{appConfig.promptConfig.formatOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>

				<Grid>
					<CustomButton type="submit"> Create Helpful Response</CustomButton>
				</Grid>
			</form>
		</FormProvider>
	)
}

// Export the PromptForm component
export default PromptForm
