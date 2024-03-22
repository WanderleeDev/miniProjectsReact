import NotFoundPage from "../not-found"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Page",
}

export default function Blog() {
  return (
    <>
      <h2 className="text-font-lg text-center underline">Test Section of Page 404</h2>
      <NotFoundPage />
    </>
  )
}
