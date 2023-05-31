

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
    ],

    formatOptions: [
      { value: "Markdown", label: "Markdown" },
      { value: "List", label: "List" },
      { value: "Paragraph", label: "Paragraph" },
      { value: "Email", label: "Email" },
      { value: "Social Media", label: "Social Media" },
    ]
  }
}

export default appConfig;