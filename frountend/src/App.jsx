import HomePage from "./pages/HomePage";

function App() {

  const handleShorten = async (e) => {
    e.preventDefault();

    setError("");
    setShortUrl("");

    // Validate URL
    try {
      const parsedUrl = new URL(url);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error("Invalid URL");
      }
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_url: url,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to shorten URL.");
      }

      if (!data.short_url) {
        throw new Error("Short URL was not returned by the server.");
      }

      const result = data.short_url.startsWith("http")
        ? data.short_url
        : `http://localhost:3000/${data.short_url}`;

      setShortUrl(result);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Unable to connect to the backend."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      alert("Short URL copied!");
    } catch {
      setError("Unable to copy the URL.");
    }
  };

  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;