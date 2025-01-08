import React from "react";
import { Select } from "@mantine/core";

interface SortProps {
  sortField: string;
  setSortField: (field: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortField, setSortField }) => (
  <Select
    label="Sort By"
    value={sortField}
    onChange={(value) => setSortField(value || "name")}
    data={[
      { value: "name", label: "Name" },
      { value: "category", label: "Category" },
      { value: "language", label: "Language" },
    ]}
    mb="md"
  />
);

export default Sort;