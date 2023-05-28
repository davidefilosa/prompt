import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { creator, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: creator,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();
  } catch (error) {
    console.log(error);
  }
};
