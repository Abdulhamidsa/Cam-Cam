import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Perform any necessary actions upon successful checkout
    // For example, display a success message or update the order status

    // Determine the checkout result (success or cancel)
    const checkoutResult = determineCheckoutResult(); // Replace this with your own logic

    // Redirect to the appropriate page after a brief delay
    const redirectTimer = setTimeout(() => {
      if (checkoutResult === "success") {
        router.push("/thank-you");
      } else if (checkoutResult === "cancel") {
        router.push("/cancel");
      }
    }, 3000);

    // Clean up the timer on unmount
    return () => clearTimeout(redirectTimer);
  }, []);

  // Replace determineCheckoutResult() with your own logic to determine the checkout result
  function determineCheckoutResult() {
    const { result } = router.query;
    if (result === "success") {
      return "success";
    } else if (result === "cancel") {
      return "cancel";
    }
    // Return a default value if the result is not determined
    return "unknown";
  }

  return (
    <div>
      <h1>Success!</h1>
      <p>Your payment was successful. Redirecting...</p>
    </div>
  );
}
