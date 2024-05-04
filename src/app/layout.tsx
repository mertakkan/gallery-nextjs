import "~/styles/globals.css";
import { fonts } from "~/utils/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "~/components/topnav";

export const metadata = {
  title: "Next.js Gallery",
  description: "A showcase project demonstrating a gallery powered by Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fonts.inter}`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
