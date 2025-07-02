"use server";

import { randomUUID } from "node:crypto";
import type { FormSchema } from "@/app/validation/formSchema";
import { formSchema } from "@/app/validation/formSchema";
import { z } from "zod";

interface User {
	email: string;
	username: string;
	uuid: string;
}

export async function createPost({ email, username }: FormSchema) {
	const uuid: string = randomUUID();

	const values: Omit<User, "uuid"> = formSchema.parse({
		email,
		username,
	});

	const user: User = {
		...values,
		uuid,
	};

	const url = process.env.AIRTABLE_WEBHOOK_URL ?? "";

	const json = JSON.stringify(user);

	console.log("JSON CONSOLE LOG", json);

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

	// if (res.ok) {
	// 	alert
	// }
	console.log("Response:", res);
}
