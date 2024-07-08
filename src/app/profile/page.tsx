"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React from "react";

export default function Page() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error) return <div>{error.message}</div>;
  return (
    user && (
      <div>
        <Image src={user.picture ?? ""} alt={user.name ?? ""} width={100} height={100} />

        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
