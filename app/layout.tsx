import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "التقنيات البيداغوجية للتكوين المهني",
  description:
    "مرجع شامل للتقنيات البيداغوجية المعتمدة في التكوين المهني مع أمثلة تطبيقية وأدوات تنفيذية.",
  icons: {
    icon: "/assets/icon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
