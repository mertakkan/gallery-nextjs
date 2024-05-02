import "~/styles/globals.css";
import { fonts } from "~/utils/fonts";

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
    <html lang="en">
      <body className={`${fonts.inter}`}>{children}</body>
    </html>
  );
}
