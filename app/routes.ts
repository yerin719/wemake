import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
      route(
        "/:period",
        "features/products/pages/leaderboards-redirection-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirect-page.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
        ]),
      ]),
    ]),
  ]),
  ...prefix("/ideas", [
    index("features/ideas/pages/ideas-page.tsx"),
    route("/:ideaId", "features/ideas/pages/idea-page.tsx"),
  ]),
  ...prefix("/jobs", [
    index("features/jobs/pages/jobs-page.tsx"),
    route("/:jobId", "features/jobs/pages/job-page.tsx"),
    route("/submit", "features/jobs/pages/submit-job-page.tsx"),
  ]),
  ...prefix("/auth", [
    layout("features/auth/layouts/auth-layout.tsx", [
      route("/login", "features/auth/pages/login-page.tsx"),
      route("/join", "features/auth/pages/join-page.tsx"),
      ...prefix("/otp", [
        route("/start", "features/auth/pages/otp-start-page.tsx"),
        route("/complete", "features/auth/pages/otp-complete-page.tsx"),
      ]),
      ...prefix("/social/:provider", [
        route("/start", "features/auth/pages/social-start-page.tsx"),
        route("/complete", "features/auth/pages/social-complete-page.tsx"),
      ]),
    ]),
  ]),
  ...prefix("/community", [
    index("features/community/pages/community-page.tsx"),
    route("/:postId", "features/community/pages/post-page.tsx"),
    route("/submit", "features/community/pages/submit-post-page.tsx"),
  ]),
  ...prefix("/teams", [
    index("features/teams/pages/teams-page.tsx"),
    route("/:teamId", "features/teams/pages/team-page.tsx"),
    route("/create", "features/teams/pages/submit-team-page.tsx"),
  ]),
] satisfies RouteConfig;
