import { Navbar } from "./Navbar";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FinalCTA />
      <Footer />
    </>
  );
}
