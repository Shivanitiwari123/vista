"use client";
import React, { useEffect, useState } from "react";
import RenderComponent from "../RenderComponent/RenderComponent";
import HomePageData from "@/data/homeData.json";

const HomePage = () => {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/fec2f164331c4a098b7c0b990c2c2051/home"
      );
      if (response.ok) {
        const data = await response.json();
        setPageData(data[0]); // Set the fetched data to state
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function updateHandler() {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/fec2f164331c4a098b7c0b990c2c2051/home/66daf973028a7803e87a6b47",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(HomePageData),
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="home-page w-full">
      {pageData?.components?.map((component) => (
        <div key={component.id}>{RenderComponent(component)}</div>
      ))}
      <div className="bg-red-400 p-4 m-2" onClick={updateHandler}>
        Update
      </div>
    </div>
  );
};

export default HomePage;
