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
import HomePage from "./pages/HomePage.tsx"

// This is to extend chakraUI's color styles
// This defines the colors object, which contains the brand color palette
const colors = {
	brand: {
		100: "#ff0a54",
		200: "#ff477e",
		300: "#ff5c8a",
		400: "#ff7096",
		500: "#ff85a1"
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
				path: "/",
				element: <HomePage /> // This will show the home page whenever the user is on the home route
			},
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
