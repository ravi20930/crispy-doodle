"use server";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";

export async function handleFormSubmit(currentState, formData) {
  const file = formData.get("my-file");
  const fileName = file?.name;
  const fileType = file?.type;
  const binaryFile = await file.arrayBuffer();
  const fileBuffer = Buffer.from(binaryFile);
  const s3client = new S3({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
    },
  });
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: fileType,
  };
  try {
    const upload = await s3client.send(new PutObjectCommand(params));
    return {
      status: "success",
      message: `File ${fileName} uploaded successfully`,
    };
  } catch (error) {
    // Handle error
    console.error("Error uploading file to S3:", error);
    return { status: "error", message: "File upload failed" };
  }
}
