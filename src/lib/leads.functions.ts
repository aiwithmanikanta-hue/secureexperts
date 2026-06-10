import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(32),
  city: z.string().trim().max(120).optional().default(""),
  requirement: z.string().trim().max(500).optional().default(""),
  source: z.string().trim().max(64).optional().default("chatbot"),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      phone: data.phone,
      city: data.city || null,
      requirement: data.requirement || null,
      source: data.source || "chatbot",
    });
    if (error) {
      console.error("Failed to insert lead", error);
      throw new Error("Could not save lead");
    }
    return { ok: true as const };
  });