import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Abiona Quadrat A.",
					description:
						"A passionate Full Stack Web Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "",
					keywords: [
						"web developer",
						"full stack",
						"full stack web developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			
			<Education />
			<Experience />
			
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
