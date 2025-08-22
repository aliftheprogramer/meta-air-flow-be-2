// src/controller
import { Request, Response } from "express";
export const handlingFromFlask = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "Handling from Flask endpoint reached" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}