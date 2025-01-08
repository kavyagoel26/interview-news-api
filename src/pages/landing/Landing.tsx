import React, { useEffect, useState } from "react";
import { useFetchSources } from "../../hooks/useFetchSources";
import { useAppStore } from "../../store/app.store";
import { Container, Button } from "@mantine/core";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import DataTable from "../../components/DataTable";
import "../../styles/Landing.css";
import internet from "../../assets/internet.png";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortField, setSortField] = useState("name");
  const [country, setCountry] = useState("us");
  const navigate = useNavigate();
  const { data: sources = [], isLoading, error, refetch } = useFetchSources({ country, category });
  const { apiKey, logout } = useAppStore();

  useEffect(() => {
    refetch();
  }, [country, category, refetch]);

  const handleLogout = () => {
    logout(navigate);
    ;
  }

  // Filter and Sort sources based on user input
  const filteredAndSortedSources = sources
    .filter((source) =>
      source.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));

  // Conditional rendering based on the API key and data loading state
  if (!apiKey) {
    return <p>Please log in to access the dashboard.</p>;
  }

  if (isLoading) {
    return <p>Loading sources...</p>;
  }

  if (error) {
    return <p>Error loading sources. Please try again later.</p>;
  }

  return (
    <Container className="landing-container">
      {/* Header Section */}
      <div className="header">
        <div className="header-left">
          <img src={internet} alt="Logo" />
          <h2 className="custom-title">News Sources</h2>
        </div>
        <Button
          className="logout-button"
          onClick={handleLogout}
          color="blue"
          mb="md"
        >
          Logout
        </Button>
      </div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter country={country} setCountry={setCountry} category={category} setCategory={setCategory} />
      <Sort sortField={sortField} setSortField={setSortField} />
      <DataTable sources={filteredAndSortedSources} />
    </Container>
  );
};

export default Landing;

