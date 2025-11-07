import { useState } from "react";

export default function Chart() {
  const [sorted, setSorted] = useState([
    { id: 1, name: "Apple",    category: "Fruit",     color: "Red",    origin: "USA",       taste: "Sweet", price: 2   },
    { id: 2, name: "Carrot",   category: "Vegetable", color: "Orange", origin: "India",     taste: "Sweet", price: 1   },
    { id: 3, name: "Banana",   category: "Fruit",     color: "Yellow", origin: "Srilanka",  taste: "Sweet", price: 1.5 }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = sorted.filter((item) => {
    const values = Object.values(item).join("").toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });

  const fieldNames = Object.keys(sorted[0]);

  return (
    <>
      <input
        type="text"
        placeholder="Search anything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            {fieldNames.map((field) => (
              <th key={field}>{field.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                {fieldNames.map((field) => (
                  <td key={field}>{item[field]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={fieldNames.length}>No matching results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
