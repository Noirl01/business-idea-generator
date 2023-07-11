// file: /prompts/promptUtils.js
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating business ideas based on a budget.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a business idea and a step-by-step plan for a budget of $${input}.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_business_idea",
      description: "Generate a business idea and a step-by-step plan based on a budget.",
      parameters: {
        type: "object",
        properties: {
          businessIdea: {
            type: "string",
            description: "The generated business idea",
          },
          stepByStepPlan: {
            type: "string",
            description: "The generated step-by-step plan",
          },
        },
        required: ["businessIdea", "stepByStepPlan"],
      },
    },
  ];
}
