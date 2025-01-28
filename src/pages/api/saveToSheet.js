// pages/api/saveToSheet.js

import { google } from "googleapis";
import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, phone, email, service, date } = req.body;

    // Load the service account key
    const keyFilePath = path.join(process.cwd(), "src/app/config/opportune-sylph-424309-p6-33486398dc2d.json");
    const keyFile = JSON.parse(await fs.readFile(keyFilePath, "utf8"));

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: keyFile,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Replace with your Google Sheets ID
    const spreadsheetId = "1r3-IaINDjL4D3ZzUwEEX2qBgx8Q2eCH4G-xalp0T8N0";

    // Append data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1", // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstName, lastName, phone, email, service, date]],
      },
    });

    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
}
