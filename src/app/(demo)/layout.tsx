export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen p-8 bg-neutral-900">{children}</div>;
}
