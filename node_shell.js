const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'600b2de6-b14a-4834-8b97-4bfef06a5471'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
