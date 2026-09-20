"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

function Register() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Password tidak sama");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Pendaftaran berhasil. Silakan cek email untuk verifikasi.");
    router.push("/login?registered=true");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleRegister}
      className="flex justify-center items-center min-h-screen"
    >
      <Field className="flex justify-center max-w-sm">
        <FieldLabel className="flex justify-center" htmlFor="inline-end-input">
          Register
        </FieldLabel>

        <InputGroup>
          <InputGroupInput
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </InputGroup>

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
            minLength={6}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputGroupInput
            required
            minLength={6}
            type="password"
            placeholder="Konfirmasi password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </InputGroup>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}

        <Button variant="outline" type="submit">
          Daftar
        </Button>
        <Link href="/login" className="text-white">
          sudah punya akun? Login
        </Link>
      </Field>
    </form>
  );
}

export default Register;
