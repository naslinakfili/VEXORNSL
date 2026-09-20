"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex justify-center items-center min-h-screen"
    >
      <Field className="flex justify-center max-w-sm">
        <FieldLabel className="flex justify-center" htmlFor="inline-end-input">
          Login
        </FieldLabel>
        <InputGroup>
          <InputGroupInput
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputGroupInput
            required
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputGroup>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button variant="outline" type="submit">
          Login
        </Button>
        <Link href="/register" className="text-white">
          belum punya akun?
        </Link>
      </Field>
    </form>
  );
}
