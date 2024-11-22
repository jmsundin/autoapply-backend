module.exports = {
	username: "jon_sundin",
	remote: true,
	generate_resume: false,
	experienceLevel: {
		internship: false,
		entry: true,
		associate: true,
		"mid-senior level": false,
		director: false,
		executive: false,
	},
	jobTypes: {
		"full-time": true,
		contract: true,
		"part-time": true,
		temporary: true,
		internship: false,
		other: false,
		volunteer: false,
	},
	date: {
		"all time": false,
		month: true,
		week: false,
		"24 hours": false,
	},
	positions: ["sales engineer", "software engineer"],
	locations: ["San Diego", "los angeles"],
	apply_once_at_company: true,
	distance: 100,
	company_blacklist: ["sony", "apple"],
	title_blacklist: ["janitor", "cook"],
	location_blacklist: ["venus", "jupiter"],
	job_applicants_threshold: {
		min_applicants: 0,
		max_applicants: 90,
	},
	llm_model_type: "openai",
	llm_model: "gpt-4o-mini",
};