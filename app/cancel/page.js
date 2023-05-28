// pages/cancel.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Perform any necessary actions upon canceled checkout
    // For example, display a cancellation message or handle cleanup

    // Redirect to a cancellation page after a brief delay
    const redirectTimer = setTimeout(() => {
      router.push("/checkout-cancelled");
    }, 3000);

    // Clean up the timer on unmount
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <h1>Checkout Canceled</h1>
      <p>Your payment was canceled. Redirecting to the cancellation page...</p>
    </div>
  );
}
