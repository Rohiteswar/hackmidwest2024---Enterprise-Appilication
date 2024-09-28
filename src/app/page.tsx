"use client"; // Ensure this runs on the client side

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs"; // Import Clerk's useAuth hook
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { PhotoBoothLanding } from "@/Components/photo-booth-landing";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/Dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div>
      <PhotoBoothLanding />
    </div>
  );
}
