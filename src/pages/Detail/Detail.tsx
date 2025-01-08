import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchSingleResource } from "../../hooks/useFetchSingleResource";
import { Container, Button, Loader, Center, Text } from "@mantine/core";
import ResourceDetails from "../../components/ResourceDetails";
import ArticlesList from "../../components/ArticlesList";

const Detail: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const navigate = useNavigate();
  const { data: resource, isLoading, error } = useFetchSingleResource(resourceId || "");

  if (isLoading) {
    return (
      <Center>
        <Loader size="lg" />
      </Center>
    );
  }

  if (error || !resource) {
    return (
      <Container>
        <Text color="red">Error: Resource not found.</Text>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Button onClick={() => navigate("/dashboard")} mb="md">
        Back to Dashboard
      </Button>
      <ResourceDetails resource={resource} />

    <ArticlesList sourceId = {resourceId || ""}/>
    </Container>

  );
};

export default Detail;