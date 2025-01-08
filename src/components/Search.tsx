import React from "react";
import { Input } from "@mantine/core";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => (
  <Input
    placeholder="Search by name"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    mb="md"
  />
);

export default Search;