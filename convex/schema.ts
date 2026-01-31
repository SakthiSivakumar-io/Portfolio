import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    objective: v.string(),
    tools: v.array(v.string()),
    problemStatement: v.string(),
    analysis: v.string(),
    outcome: v.string(),
    category: v.string(),
    featured: v.boolean(),
    order: v.number(),
  }),
  
  skills: defineTable({
    category: v.string(),
    name: v.string(),
    level: v.string(),
    order: v.number(),
  }),
  
  experience: defineTable({
    title: v.string(),
    company: v.string(),
    duration: v.string(),
    location: v.string(),
    responsibilities: v.array(v.string()),
    achievements: v.array(v.string()),
    order: v.number(),
  }),
  
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    submittedAt: v.number(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
