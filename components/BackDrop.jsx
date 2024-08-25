"use client";
import { useRouter } from "next/navigation";

function BackDrop() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}

export default BackDrop;
