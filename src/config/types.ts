export interface PostPromptProps {
  prompt: string
  tone: string
  format: string
  assistant: string
}

export interface ServerDataObject {
  aiData: string
}

// Define the interface for the PromptForm component's props
export interface PromptFormProps {
  serverData: (data: any) => void
}