import { Router, Request, Response } from "express";
import { ImageRouter } from "./image.router";
import { filterImageFromURL, deleteLocalFiles } from "../util/util";

const router: Router = Router();

router.use("/", ImageRouter);

router.get("/filteredimage", async (req: Request, res: Response) => {
  const { image_url } = req.query;
  if (!image_url) {
    return res.status(400).send({ message: "image_url is required" });
  }
  const filePath: string = await filterImageFromURL(image_url);
  res.status(200).sendFile(filePath, async err => {
    if (!err) {
      console.log("File sent...");
      await deleteLocalFiles([filePath]);
    }
  });
});

export const IndexRouter: Router = router;
