import BaseLayout from "@/components/layout/BaseLayout";

export default function BuildABoxPage() {
  return (
    <BaseLayout>
      <div className="container-box py-16">
        <h1 className="text-3xl font-butler mb-6 text-navy">Choose a Box</h1>
        <p className="mb-8">
          Welcome to the most convenient way to create a unique and personalized gift box for your special loved ones.
          Start by choosing the desired color of your gift box!
        </p>

        <div className="rounded-md bg-cream/20 p-8 text-center">
          <h2 className="text-xl font-butler mb-4">Coming Soon</h2>
          <p>
            This page is currently under development. Please check back later!
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
