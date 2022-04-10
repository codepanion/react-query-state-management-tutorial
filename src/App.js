import "./App.css";
import UserInfo from "./components/UserInfo";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserInfo />
      </div>
    </QueryClientProvider>
  );
};

export default App;
