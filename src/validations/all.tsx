import { z } from "zod";
import { EGender, EMaritalStatus } from "../enums";

export const allFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"), // TextField
  gender: z.enum(["female", "male"]).default("female"), // Radio Group
  maritalStatus: z.enum(["single", "married"]).default("single"), // Select
  newsletterSubscription: z.boolean().optional(), // Checkbox
  notifications: z.boolean().optional(), // Switch
  satisfactionLevel: z
    .number()
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"), // Slider
  cityId: z
    .number({
      required_error: "City is required",
    })
    .nullable(), // Autocomplete
  cityIds: z.array(z.number()).default([]),
  birthDate: z.date().refine((date) => date <= new Date(), {
    message: "Birth date must be in the past",
  }), // DatePicker
  eventStartTime: z.date().refine((date) => date >= new Date(), {
    message: "Event start time must be in the future",
  }), // DateTimePicker
});

export type AllFormSchema = z.infer<typeof allFormSchema>;

export const allFormInitialValues: AllFormSchema = {
  firstName: "",
  gender: EGender.FEMALE,
  maritalStatus: EMaritalStatus.SINGLE,
  newsletterSubscription: false,
  notifications: false,
  satisfactionLevel: 5,
  cityIds: [],
  cityId: null,
  birthDate: new Date(),
  eventStartTime: new Date(),
};

// Select
// Radio Group
// Checkbox
// Switch
// Slider
// Button
// Autocomplete
// DatePicker
// TimePicker
// DateTimePicker
