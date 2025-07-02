import * as z from "zod";

export const formSchema = z.object({
	email: z
		.string()
		.min(1, "El email es obligatorio")
		.email("El formato del email no es válido"),
	username: z
		.string({
			required_error: "Name is required",
		})
		.min(3, "Name must be at least 3 characters")
		.regex(
			/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/,
			"El nombre solo puede contener letras sin espacios",
		),
});

export type FormSchema = z.infer<typeof formSchema>;
