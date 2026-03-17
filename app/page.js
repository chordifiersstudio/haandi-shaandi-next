"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import WaitlistForm from "../components/WaitlistForm";
import AiChef from "../components/AiChef";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <WaitlistForm />
      <Footer />
      <AiChef />
    </div>
  );
}
