import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  capacity: z.string().trim().max(80).optional().or(z.literal("")),
  solution_type: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );
    const { error } = await supabase.from("inquiries").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      industry: data.industry || null,
      capacity: data.capacity || null,
      solution_type: data.solution_type || null,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
