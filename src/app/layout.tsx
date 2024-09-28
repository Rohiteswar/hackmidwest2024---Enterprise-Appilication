import {
  ClerkProvider
} from '@clerk/nextjs'
import './globals.css'
import { TooltipProvider } from "@radix-ui/react-tooltip";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <TooltipProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
      </TooltipProvider>
    </ClerkProvider>
  )
}