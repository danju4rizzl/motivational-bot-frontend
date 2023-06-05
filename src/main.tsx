import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LoginPage from "./pages/LoginPage.tsx"
import Root from "./routes/Root.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import useUserData from "./hooks/useUserData.tsx"

// This is to extend chakraUI's color styles
// This defines the colors object, which contains the brand color palette
const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac"
	}
}

// This creates a new BrowserRouter component and passes it the routes defined in the createRoutesFromElements function

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/login",
				element: <LoginPage />
			}
		]
	}
])

// This creates a new custom theme by extending the Chakra UI theme with the colors object
const customTheme = extendTheme({ colors })

// This creates a new QueryClient instance from react-query
const queryClient = new QueryClient()

// This renders the App component in the root element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
)
