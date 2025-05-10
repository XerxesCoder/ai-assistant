import { NextResponse } from "next/server";
import {
  createDataStreamResponse,
  experimental_generateSpeech as generateSpeech,
  generateText,
  smoothStream,
  streamText,
} from "ai";

import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const openrouter = createOpenRouter({
      apiKey: `${process.env.OPENROUTER_API_KEY}`,
      headers: {
        "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
        "X-Title": "PhoenixSwap AI Chat",
      },
    });

    if (messages.length == 1) {
      const { text: title } = await generateText({
        model: openrouter("tngtech/deepseek-r1t-chimera:free"),
        system: `\n
      - you will generate a short title based on the first message a user begins a conversation with
      - ensure it is not more than 80 characters long
      - the title should be a summary of the user's message
      - do not use quotes or colons`,
        messages: messages,
      });
      console.log(title);
    }

    return createDataStreamResponse({
      execute: (dataStream) => {
        const result = streamText({
          model: openrouter(model),
          system: "You are a personal AI Like JARVIS in ironman, act like one",
          messages,
          maxSteps: 5,

          experimental_transform: smoothStream({ chunking: "word" }),

          onFinish: () => {
            console.log("Success");
          },
        });

        result.consumeStream();

        result.mergeIntoDataStream(dataStream, {
          sendReasoning: true,
        });
      },
      onError: () => {
        return "Oops, an error occured!";
      },
    });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
