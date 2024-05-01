"use client";

import CardWrapper from "@/components/auth/card-wrapper";

export const NewVerificationForm = () => {
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="flex items-center w-full justify-center"></div>
    </CardWrapper>
  );
};
