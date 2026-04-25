import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Add custom logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (pathname.startsWith("/teacher")) {
          return token?.role === "TEACHER";
        }

        if (pathname.startsWith("/student")) {
          return token?.role === "STUDENT";
        }

        return true;
      }
    }
  }
);

export const config = {
  matcher: ["/teacher/:path*", "/student/:path*", "/profile"]
};
