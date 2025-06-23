import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { unstable_ViewTransition as ViewTransition, use } from "react";

import { ProfileForm } from "@/components/profile-form";

export default function Home() {
	return (
		<ViewTransition name="page">
			<main className={cn("flex flex-1 flex-col items-center")}>
				<div className="mt-38 z-10">
					<ProfileForm />
				</div>
			</main>
		</ViewTransition>
	);
}
