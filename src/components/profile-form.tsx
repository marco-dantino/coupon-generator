"use client";

import type { FormSchema } from "@/app/validation/formSchema";
import { formSchema } from "@/app/validation/formSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPost } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ProfileForm() {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: "", username: ""},
	});

	return (
		<Card>
			<CardContent>
				<Form {...form}>
					<form className="space-y-8" action={createPost}>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Email" {...field} />
									</FormControl>
									<FormDescription>Intersar email personal.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Username" {...field} />
									</FormControl>
									<FormDescription>Ingresar usuario.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
