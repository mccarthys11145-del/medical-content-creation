
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MedContent PA - AI-Enhanced Medical Content Creation",
  description: "Professional medical content creation by licensed Physician Assistant. Specializing in patient education, clinical summaries, regulatory writing, and research content.",
  keywords: "medical writing, healthcare content, patient education, clinical content, regulatory writing, physician assistant",
  authors: [{ name: "Licensed Physician Assistant" }],
  openGraph: {
    title: "MedContent PA - AI-Enhanced Medical Content Creation",
    description: "Professional medical content creation by licensed Physician Assistant",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
