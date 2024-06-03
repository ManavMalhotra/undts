import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const url =
    "https://script.google.com/macros/s/AKfycbwfKhpLbKOeVWDu1T6Rfl0yG7oDpBHNLcNLXnUdRQTDp7hb6tkGNMJQF4GXt9EdEwW7tw/exec";

  const data = req.body;
  console.log("Data", data);

  // res.status(200).json({ me ssage: "Form submitted successfully" });

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form", error);
    return res.status(500).json({ message: "Failed to submit form" });
  }
}
