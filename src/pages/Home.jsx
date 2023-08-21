import "../App.css";
function Home() {
  return (
    <div className="container">
      <h1>Create a Clone of Yourself With a Fine-tuned LLM</h1>
      <img
        className="image"
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*9pcshG7Gxt0ZgpdZBuSM1g.png"
        alt="imagen"
      />
      <p>
        This article aims to illustrate how to fine-tune a top-performing LLM
        efficiently and cost-effectively on a custom dataset. We will explore
        the utilization of the Falcon-7B model with LoRA adapters using Lit-GPT.
        <br />
        <br />
        Ever wondered what it would be like to have a digital twin? A virtual
        replica of yourself that can have conversations, learn, and even reflect
        your thoughts? Recent advances in artificial intelligence (AI) have made
        this once-futuristic idea attainable. <br />
        <br />
        The AI community’s effort has led to the development of many
        high-quality open-source LLMs, including but not limited to Open LLaMA,
        Falcon, StableLM, and Pythia. You can fine-tune these models on a custom
        instruction dataset to adapt to your specific task, such as training a
        chatbot to answer financial questions. Furthermore, it can also provide
        a data privacy advantage when data cannot be uploaded or shared with
        cloud APIs.
        <br />
        <br />
        In my case, I wanted the model to learn to speak my style by imitating
        me, using my jokes and filler words.
      </p>
    </div>
  );
}

export { Home };
