
import { Table } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const DataTable: React.FC<DataTableProps> = ({ sources }) => {
  const navigate = useNavigate();

  return (
    <Table className="sources-table" striped highlightOnHover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Language</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {sources.length > 0 ? (
          sources.map((source, index) => (
            <tr key={index} onClick={() => navigate(`/detail/${source.id}`)} style={{ cursor: "pointer" }}>
              <td>{source.name}</td>
              <td>{source.category}</td>
              <td>{source.language}</td>
              <td>{source.country}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No sources available</td>
          </tr>
        )}
             
      </tbody>
    </Table>
  );
};
export default DataTable;