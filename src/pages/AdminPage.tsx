import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "../SignInForm";
import { SignOutButton } from "../SignOutButton";
import PageWrapper from "../components/PageWrapper";

export default function AdminPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Admin Panel
        </h1>

        <Unauthenticated>
          <div className="border rounded-lg p-8 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Admin Login
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access admin features.
            </p>
            <SignInForm />
          </div>
        </Unauthenticated>

        <Authenticated>
          <div className="border rounded-lg p-8 bg-white shadow-sm space-y-6">
            <h2 className="text-xl font-semibold">
              Welcome, Admin 👋
            </h2>

            <p className="text-gray-600">
              You are successfully logged in. Admin-only features will
              be added here later.
            </p>

            <SignOutButton />
          </div>
        </Authenticated>
      </div>
    </PageWrapper>
  );
}
