import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/98c114e4-6a67-4c0c-8508-3c2d77793d2a-y0h3m3.jpg",
  "https://utfs.io/f/c6523202-73bc-415a-a396-d0d2917f404c-y0h3m4.jpg",
  "https://utfs.io/f/e21ab72a-3ecc-4589-89d6-6840f8a234bc-y0h3m5.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
