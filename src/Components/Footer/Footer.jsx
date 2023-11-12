import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    let currentYear = new Date()
    currentYear = currentYear.getFullYear()
    console.log(currentYear);

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="bg-[#1F2937] p-14 flex justify-end">
                    <div className="text-center">
                        <h3 className="text-xl uppercase text-white">contact us</h3>
                        <p className="text-white mt-3">123 ABS Street, Uni 21, Bangladesh</p>
                        <p className="text-white">+88 123456789</p>
                        <p className="text-white">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-white">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="bg-[#111827] p-14 flex justify-start">
                <div className="text-center">
                        <h3 className="text-xl uppercase text-white">follow us</h3>
                        <p className="text-white mt-3 mb-5">Join us on social media</p>
						<div className="flex gap-4 justify-center">
							<FontAwesomeIcon className="text-white text-lg" icon={faFacebookF} />
							<FontAwesomeIcon className="text-white text-xl" icon={faInstagram} />
							<FontAwesomeIcon className="text-white text-xl" icon={faTwitter} />
						</div>
                    </div>
                </div>
            </div>
            <div className="py-3 bg-[#151515]">
                <p className="text-white text-center">Copyright © {currentYear} CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;