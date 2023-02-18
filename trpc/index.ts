import { createRouter } from "@/trpc/router";
import { account } from "@/trpc/routes/account";
// import all sub-routers
import { auth } from "@/trpc/routes/auth";
import { branches } from "@/trpc/routes/branch";
import { projects } from "@/trpc/routes/projects";
import { twoFactor } from "@/trpc/routes/twoFactor";

export const appRouter = createRouter({
  auth,
  account,
  projects,
  twoFactor,
  branches,
});

// export type definition of API
export type AppRouter = typeof appRouter;
