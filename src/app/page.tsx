"use client";

import { api } from "@/app/validation/index";
import { cn } from "@/lib/utils";
import { unstable_ViewTransition as ViewTransition, use } from "react";
import { useEffect, useState } from "react";

import { ProfileForm } from "@/components/profile-form";

export default async function Home() {
	const q = await api();
	console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAA", q);
	const { records: list } = await q.users.get();

	return (
		<div>
			<h1>Usuarios</h1>
			<pre>
				<code>{JSON.stringify(list, null, 3)}</code>
			</pre>
		</div>

		// <ViewTransition name="page">
		// 	<main className={cn("flex flex-col gap-y-20 items-center w-full max-w-xl md:max-w-2xl lg:max-w-5xl m-auto mt-16 p-4")}>
		// 		<div className="flex flex-col gap-4 m-auto items-center w-full">
		// 			<h1 className="mt-6 max-w-[20ch] text-3xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
		// 				Generador de Cupones
		// 			</h1>
		// 			<p className="text-center text-xl font-medium text-muted-foreground max-w-2xl">
		// 				Crea promociones personalizadas en segundos. Define el descuento,
		// 				validez y condiciones del cupón de forma rápida y sencilla.
		// 			</p>
		// 			<div className="w-full max-w-lg">
		// 				<ProfileForm />
		// 			</div>
		// 		</div>
		// 	</main>
		// </ViewTransition>
	);
}
