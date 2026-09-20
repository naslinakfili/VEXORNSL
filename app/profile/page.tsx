"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function ProfilePage() {
  const router = useRouter();
  const [supabase] = useState(createClient);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      setUser(user);
    };

    loadUser();
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  if (!user) {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="flex w-full max-w-sm flex-col gap-4 rounded-lg border p-6">
        <h1 className="text-xl font-bold">Profile</h1>
        <p className="text-sm text-white/70">
          {user.user_metadata?.full_name || user.email}
        </p>
        <p className="text-sm text-white/50">{user.email}</p>
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </section>
    </main>
  );
}