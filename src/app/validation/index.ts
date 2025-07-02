const AIRTABLE_AT = process.env.AIRTABLE_API_KEY;

export async function api() {
	const _base = "appktNcH9ZuVouPLi";
	function http(
		{
			table,
			url = "",
			base = _base,
		}: { table: string; url?: string; base?: string },
		options: RequestInit,
	) {
		return fetch(`https://api.airtable.com/v0/${base}/${table}/${url}`, {
			...options,
			headers: {
				...options.headers,
				Authorization: `Bearer ${AIRTABLE_AT}`,
			},
		});
	}

	const _users = "tblcBrrK7ereHF0J0";

	return {
		users: {
			get: async () => {
				const res = await http({ table: _users }, { method: "GET" });
				const json = (await res.json()) as { records: object[] };
				return json;
			},
		},
	};
}
