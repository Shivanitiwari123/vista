import HomePage from "@/components/HomePage/HomePage";
import HomePageData from "@/data/homeData.json";

export default function Home() {
  // Post initial data (POST request)
  // async function postPageData() {
  //   const response = await fetch(
  //     "https://crudcrud.com/api/fec2f164331c4a098b7c0b990c2c2051/home",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(HomePageData),
  //     }
  //   );
  // }
  // postPageData();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen bg-gray-50">
      <HomePage />
    </main>
  );
}
