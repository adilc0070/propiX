import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <Hero/>
    <Footer/>
    </div>
  );
}
