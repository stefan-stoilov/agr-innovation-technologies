import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Името е задължително поле." }),
  email: z.string().email({ message: "Невалиден имейл адрес." }),
  company: z.string().optional(),
  message: z.string().min(1, { message: "Липсва съобщение" }),
  phone: z.string().optional(),
  location: z
    .enum([
      "Северна Америка",
      "Южна Америка",
      "Източна Европа",
      "Централна Европа",
      "Западна Европа",
      "Северна Африка",
      "Централна Африка",
      "Южна Африка",
    ])
    .optional(),
});

export const locations = [
  "Северна Америка",
  "Южна Америка",
  "Източна Европа",
  "Централна Европа",
  "Западна Европа",
  "Северна Африка",
  "Централна Африка",
  "Южна Африка",
];

export type ContactSchemaType = z.infer<typeof contactSchema>;
