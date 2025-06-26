"use server";

import { formSchema } from "@/app/validation/formSchema";
import { z } from "zod";

export async function createPost(formData: FormData) {
	const values = formSchema.parse({
		email: formData.get("email"),
		username: formData.get("username"),
	});

	const url = process.env.AIRTABLE_WEBHOOK_URL ?? "";

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(values),
	};

	console.log("VALUES", values);

	const res = await fetch(url, options);
	console.log("Response:", res);
}
