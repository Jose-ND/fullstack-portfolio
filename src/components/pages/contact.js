import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + contactPagePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				<div className="contact-bullet-points">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="phone" />
						</div>

						<div className="text">555-555-5555</div>
					</div>

					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="envelope" />
						</div>

<<<<<<< HEAD
						<div className="text">jordan@example.com</div>
=======
						<div className="text">jose@example.com</div>
>>>>>>> e1cafdb526520c1e67002d1520ebe4441d67682a
					</div>

					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="map-marked-alt" />
						</div>

<<<<<<< HEAD
						<div className="text">Lehi, UT</div>
=======
						<div className="text">Columbus, OH</div>
>>>>>>> e1cafdb526520c1e67002d1520ebe4441d67682a
					</div>
				</div>
			</div>
		</div>
	);
}
