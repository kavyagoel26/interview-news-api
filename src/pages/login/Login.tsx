import { Button, Container, Group, TextInput, Title, Text, Paper, Stack } from "@mantine/core";
import { useState, ChangeEvent } from "react";
import { useAppStore } from "../../store/app.store";

const Login: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const { login } = useAppStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleLogin = (): void => {
    if (apiKey.trim() === "") {
      alert("Please enter a valid API key.");
      return;
    }
    login(apiKey);
    alert("Login successful!");
  };

  return (
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily:` Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome Back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Enter your API key to continue
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <TextInput
            label="API Key"
            placeholder="Enter your API key"
            value={apiKey}
            onChange={handleInputChange}
          />
          <Button onClick={handleLogin} fullWidth mt="xl">
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
    </>
  );
};

export default Login;
