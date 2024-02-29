'use client'
import { SnackbarProvider } from "notistack";
import React from "react";

export default function ContextSnackbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}
