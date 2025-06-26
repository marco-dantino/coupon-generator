"use server";

import { formSchema } from "@/app/validation/formSchema";
import { randomUUID } from "node:crypto";

interface User {
	email: string;
	username: string;
	uuid: string;
}

export async function createPost(formData: FormData) {
	const email: string = formData.get("email") as string;
	const username: string = formData.get("username") as string;
	const uuid: string = randomUUID();

	const values:Omit<User,"uuid"> = formSchema.parse({
		email,
		username,
	});

	const user: User = {
		...values,
		uuid,
	}
	
	const url = process.env.AIRTABLE_WEBHOOK_URL ?? "";

	const json = JSON.stringify(user); 

	console.log("JSONNNNNNNNNNNNNNNNsN", json);

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(user),
	};

	console.log("VALUES", user);

	const res = await fetch(url, options);
	console.log("Response:", res);
}
