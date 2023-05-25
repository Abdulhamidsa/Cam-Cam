import Loading from "./loading";
import { Suspense } from "react";
export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
