import React, { useState } from "react";
import FileHome from "./atom/FileHome";

interface Tab {
  id: string;
  label: string;
}

const FileManagerWrapper = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs: Tab[] = [
    { id: "home", label: "Home" },
    { id: "document", label: "Document" },
    { id: "download", label: "Download" },
    { id: "picture", label: "Picture" },
    { id: "video", label: "Video" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <FileHome />;
      case "document":
        return <div>Document Content Goes Here</div>;
      case "download":
        return <div>Download Content Goes Here</div>;
      case "picture":
        return <div>Picture Content Goes Here</div>;
      case "video":
        return <div>Video Content Goes Here</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-md mt-5">
      <div className="flex w-full overflow-x-auto border-b border-gray-300 items-center">
        <div className="flex whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 text-base py-2 font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default FileManagerWrapper;
