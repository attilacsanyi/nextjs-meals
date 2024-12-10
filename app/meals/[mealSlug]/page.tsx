const MealPage = async ({
  params,
}: {
  params: { mealSlug: Promise<string> };
}) => {
  const mealSlug = (await params).mealSlug;
  return (
    <main>
      <h1>MealPage</h1>
      <p>{mealSlug}</p>
    </main>
  );
};

export default MealPage;
