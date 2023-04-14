const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getImageByPromt(prompt) {
    const response = await openai.createImage({
        prompt: "a white siamese cat",
        n: 1,
        size: "256x256",
      });
      return response.data.data[0].url;
}

module.exports = {
    getImageByPromt
}