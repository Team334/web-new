import {subtitle, title} from "@/components/primitives";
import {Image} from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div >
			<div className={"container"}>
				<div className="text-center justify-center mb-10">
					<h1 className={title({class: "main"})}>Who are we</h1>
					<h2 className={subtitle({class: "mt-7 text-lg font-light mb-10"})}>
						We are the TechKnights, Brooklyn Technical High School’s high-performance FRC (FIRST Robotics
						Competition) team. Commonly referred to as Team 334, from downtown Brooklyn, we strive to leave a
						lasting impact on our school, and fellow competitors. Newcomers to the team learn how to design, build,
						program, and compete in each year’s complex FIRST Robotics Competition.
					</h2>
					<Image
						alt="Team Photo"
						width={2000}
						src={"https://app.requestly.io/delay/500/https://www.bthsrobotics.com/media/team2022.png"}
						className={"object-cover"}
					></Image>
				</div>
			</div>

				<div className={"text-left mt-10"}>
					<h1 className={title({class: "main"})}>The Team Now</h1>
				</div>
			</div>
	);
}
