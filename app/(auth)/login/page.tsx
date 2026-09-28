"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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

  async function handleGoogleLogin() {
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) setError(error.message);
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputGroupAddon align="inline-end" />
          <InputGroupButton 
          aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
          aria-pressed={showPassword}
          onClick={() => setShowPassword((visible) => !visible)}>
          {showPassword ? <EyeOff/> : <Eye/>}
          </InputGroupButton>
        </InputGroup>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button variant="outline" type="submit">
          Login
        </Button>
        <div className="flex justify-center">OR</div>
        <Button type="button" variant="outline" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
        <Link href="/register" className="text-white">
          belum punya akun? Click di sini
        </Link>
      </Field>
    </form>
  );
}
