

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
  }
}

export default appConfig;