const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data);

    const { businessIdea, stepByStepPlan } = data.result;
    const steps = stepByStepPlan.split("\n");

    content = (
      <>
        <p>Business Idea: {businessIdea}</p>
        <p>Step-by-Step Plan:</p>
        {steps.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;