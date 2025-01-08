import React from "react";
import { Card, Text, Badge, Group, Button } from "@mantine/core";

interface ResourceDetailsProps {
  resource: {
    name: string;
    description: string;
    category: string;
    language: string;
    country: string;
    url: string;
    enrichedData?: {
      popularity: number;
      founder: string;
      headquarters: string;
      establishedYear: number;
    };
  };
}

const ResourceDetails: React.FC<ResourceDetailsProps> = ({ resource }) => {
  const { enrichedData } = resource;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text weight={500} size="lg">
          {resource.name}
        </Text>
        <Badge color="blue" size="lg">
          {resource.category}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" mb="md">
        {resource.description || "No description available."}
      </Text>

      <Group mb="md">
        <Badge color="teal">Language: {resource.language}</Badge>
        <Badge color="orange">Country: {resource.country}</Badge>
      </Group>

      {enrichedData && (
        <Card.Section mt="md">
          <Text weight={500} size="lg" mt="md">
            Additional Information
          </Text>
          <Group>
            <Badge color="cyan">Popularity: {enrichedData.popularity}</Badge>
            <Badge color="pink">Founder: {enrichedData.founder}</Badge>
            <Badge color="yellow">
              Established Year: {enrichedData.establishedYear}
            </Badge>
            <Badge color="violet">
              Headquarters: {enrichedData.headquarters}
            </Badge>
          </Group>
        </Card.Section>
      )}

      <Button
        component="a"
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        mt="md"
        variant="outline"
        fullWidth
      >
        Visit Source
      </Button>
    </Card>
  );
};

export default ResourceDetails;