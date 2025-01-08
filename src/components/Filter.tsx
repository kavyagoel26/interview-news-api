import React from "react";
import { Select } from "@mantine/core";

interface FilterProps {
  country: string;
  setCountry: (country: string) => void;
  category: string;
  setCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ country, setCountry, category, setCategory }) => (
  <>
    <Select
      label="Select Country"
      value={country}
      onChange={(value) => setCountry(value || "us")}
      data={[
        { value: "us", label: "United States" },
        { value: "gb", label: "United Kingdom" },
        { value: "in", label: "India" },
        { value: "au", label: "Australia" },
        { value: "ca", label: "Canada" },
      ]}
      mb="md"
    />
    <Select
      label="Select Category"
      value={category}
      onChange={(value) => setCategory(value || "")}
      data={[
        { value: "", label: "All Categories" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "general", label: "General" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" },
      ]}
      mb="md"
    />
  </>
);

export default Filter;