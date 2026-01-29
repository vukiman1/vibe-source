"use client";

import { FormSkeleton } from "@/components/loading";

export default function AuthLoading() {
  return (
    <div className="w-full rounded-2xl border bg-card p-8 shadow-sm">
      <FormSkeleton fields={2} hasSubmitButton hasSocialButtons />
    </div>
  );
}
