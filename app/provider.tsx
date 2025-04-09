'use client";';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React, { FC, ReactNode } from "react";
import { Client, HydrationProvider } from "react-hydration-provider";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HydrationProvider>
      <Client>
        <ClerkProvider>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
          {children}
        </ClerkProvider>
      </Client>
    </HydrationProvider>
  );
};

export default Provider;
