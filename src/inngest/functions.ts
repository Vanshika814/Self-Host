import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //fetching the video
    await step.sleep("Fetching", "3s");
    //Transcribing 
    await step.sleep("Transcribing", "3s");
    //Sending transcription to AI
    await step.sleep("Sending-to-AI", "3s");

    await step.run("create-workflow",() => {
        return prisma.workflow.create({
            data: {
                name: "workflow-form-inngest",
            },
        });
    })
  },
);