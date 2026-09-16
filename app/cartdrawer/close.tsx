"use client";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
function Close() {
  const router = useRouter();
  return (
    <>
      <Button
        variant="outline"
        className="border-none rounded-full p-2"
        onClick={() => router.back()}
        aria-label="Close cart"
      >
        <X className="w-4 h-4" />
      </Button>
    </>
  );
}

export default Close

