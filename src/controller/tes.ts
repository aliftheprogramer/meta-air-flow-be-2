import { Request, Response } from "express";

export const tesajah = async (req: Request, res: Response): Promise<any> => {
  try {
    res.status(200).json({ message: "Tesajah endpoint reached" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


