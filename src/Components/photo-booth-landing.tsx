"use client";

import { Camera, Share2, Sparkles, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Hero } from "./hero";

export function PhotoBoothLanding() {
  return (
    <div className="relative flex flex-col min-h-[100%] bg-black">
      <header className="absolute top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center z-10">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 text-white" />
          <span className="ml-2 text-2xl font-bold text-white">SnapShare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          

          <SignedOut>
            <SignInButton>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Try It for free! 
                </span>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full">
          <Hero />
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8">
              Why Choose SnapShare?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Camera className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">High-Quality Photos</h3>
                <p className="text-muted-foreground text-center">
                  Capture stunning, professional-grade photos with our advanced
                  camera technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Sparkles className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Fun Filters & Effects</h3>
                <p className="text-muted-foreground text-center">
                  Enhance your photos with a wide range of filters, stickers,
                  and special effects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Share2 className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Instant Sharing</h3>
                <p className="text-muted-foreground text-center">
                  Share your photos instantly on social media or via email with
                  just a tap.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Start Snapping?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Use SnapShare now and turn every moment into a lasting
                  memory.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Upload Now!
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 SnapBooth. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
