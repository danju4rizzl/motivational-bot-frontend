
/*
* This is the setting config for the clients UI
*/
const appConfig = {
  promptConfig: {
    toneOptions: [
      { value: "Happy", label: "Happy" },
      { value: "Confident", label: "Confident" },
      { value: "Friendly", label: "Friendly" },
      { value: "Professional", label: "Professional" },
    ],

    assistantOptions: [
      { value: "SEO", label: "SEO" },
      { value: "Accountant", label: "Accountant" },
      { value: "Realtor", label: "Realtor" },
      { value: "Business", label: "Business" },
      { value: "Senior Developer", label: "Developer" },
    ],

    formatOptions: [
      { value: "Step by Step", label: "List" },
      { value: "Paragraph", label: "Paragraph" },
      { value: "Email", label: "Email" },
      { value: "Code", label: "Code" },
      { value: "Markdown", label: "Markdown" },
      { value: "Social Media Post", label: "Social Media" },
    ]
  },
  // You can add or change the colors for the app here
  allColors: {
    brand: {
      100: "#ff0a54",
      200: "#ff477e",
      300: "#ff5c8a",
      400: "#ff7096",
      500: "#ff85a1"
    }
  }
}


export default appConfig;

