"use client";

import { ChangeEvent, useState } from "react";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      console.log("Selected File:", files[0]);
    }
  };

  const handleApiRequest = async () => {
    if (selectedFile) {
      const formdata = new FormData();
      formdata.append("title", "test");
      formdata.append("description", "test");
      formdata.append("url1", "test");
      formdata.append("url2", "test");
      formdata.append("images", selectedFile, "IdeaComponent.svg");

      try {
        const response = await fetch("https://ideacampus.site:8080/api/club", {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0OSIsImlhdCI6MTcwNTM1NjI4MywiZXhwIjoxNzA1MzU5ODgzfQ.aOkcfDFdR0qAaFOnOC3WFBFxIXerPcN-T31BASo9fyIvau1IDIt-GcgSEPpMKH-VEQROOfe1Y_BrE7YKUtEB3w",
          },
          body: formdata,
        });

        if (response.ok) {
          const result = await response.text();
          console.log("API Response:", result);
        } else {
          console.error(
            "API Request Failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during API request:", error);
      }
    } else {
      console.warn("No file selected.");
    }
  };

  return (
    <div>
      {/* File input element */}
      <input type="file" onChange={handleFileChange} />

      {/* Display selected file name */}
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}

      {/* Button to trigger API request */}
      <button onClick={handleApiRequest}>Make API Request</button>
    </div>
  );
};

export default HomePage;
