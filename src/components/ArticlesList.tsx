import React from "react";
import { Grid, Text, Title, Center, Loader, Button } from "@mantine/core";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { format } from "date-fns";
import ".../../../styles/ArticleList.css";

interface ArticlesListProps {
  sourceId: string;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ sourceId }) => {
  const { data: articles = [], isLoading, isError } = useFetchArticles(sourceId);
  const today = format(new Date(), "MMMM d, yyyy");

  if (isLoading) {
    return (
      <Center>
        <Loader size="lg" />
      </Center>
    );
  }

  if (isError) {
    return <Text color="red">Failed to load articles. Please try again later.</Text>;
  }

  return (
    <div className="grid-container">
      {/* Heading */}
      <Title order={2} className="headline-title">
        News Headlines
      </Title>

      {/* Articles Grid */}
      <Grid gutter="lg">
        {articles.map((article, index) => (
          <Grid.Col key={index} sm={6} lg={4}>
            <div className="article-card">
              <Text className="article-title">{article.title}</Text>
              <Text className="article-date">
                Published on: {format(new Date(article.publishedAt), "MMMM d, yyyy")}
              </Text>
              <Text className="article-description">
                {article.description || "No description available."}
              </Text>
              <Button
                component="a"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card-button"
              >
                Read More
              </Button>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesList;