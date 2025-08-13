import { redirect } from "react-router";
import type { Route } from "./+types/my-profile-page";

export function loader({}: Route.LoaderArgs) {
  // find user using the cookies
  return redirect("/users/nico");
}
