import { AddBlogValues } from "@/library/types";
import { Dispatch, SetStateAction } from "react";
import { addBlog } from "@/system/data/json-handler";

export async function processSubmit({
  formData,
  setSubmitErrors,
}: {
    formData: FormData;
    setSubmitErrors: Dispatch<SetStateAction<string[]>>;
  }): Promise<void> {
  const title = formData.get("title")?.toString().trim() || "";
  const author = formData.get("author")?.toString().trim() || "";
  const content = formData.get("content")?.toString().trim() || "";
  const tags = formData.get("tags")?.toString().trim() || "";
  const formValues: AddBlogValues = {
    title,
    author,
    content,
    tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0),
  };
  
  const errors = validateFormData(formValues);
  if (errors.length > 0) {
    setSubmitErrors(errors);
    return;
  } else {
    await uploadFormValues(formValues);
  }
}

function validateFormData(formValues: AddBlogValues): string[] {
  const errors: string[] = [];
  
  for (const [key, value] of Object.entries(formValues)) {
    if (typeof value === "string" && value.trim() === "") {
      errors.push(`"${key}" has no value`)
    }
  }
  
  if (formValues.tags.length === 0)
    errors.push('Add atleast one tag')
  
  if (formValues.content.length < 100)
    errors.push('The content must be atleast 100 characters long')
  
  return errors
}

async function uploadFormValues(formValues: AddBlogValues): Promise<void> {
  const blogProps = {
    id: crypto.randomUUID(),
    title: formValues.title,
    author: formValues.author,
    date: new Date().toISOString(),
    content: formValues.content,
    tags: formValues.tags
  }
  
  await addBlog(blogProps)
}

