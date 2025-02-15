import { FC } from "react";
import styles from "./PublicationCard.module.scss";
import nathanImg from "./0_Bqr-dMZplB-namyY.jpg";
import mdworldImg from "./0_gTl35Xy5zRcgu5wJ.png";
import nickImg from "./2_k7vMxGfKwfqJ86TcprDA_Q.jpg";
import hamzaImg from "./2_1JTGoMi8_nuGQVO1EoItXg.png";
import bjornImg from "./0_o9UzuQyUwobacrCt.jpg";
import Image, { StaticImageData } from "next/image";

const avatars: Record<string, StaticImageData> = {
  mdworld: mdworldImg,
  "nathan perdijk": nathanImg,
  "bjorn ‘bjeaurn’": bjornImg,
  "hamza haiken": hamzaImg,
  "nick ten veen": nickImg,
};

export const PublicationCardAvatar: FC<{ author: string }> = ({ author }) => {
  const avatar = avatars[author.toLowerCase()];

  return (
    <div className={styles["publication-card--avatar"]}>
      <div className="letter">{author.slice(0, 1).toUpperCase()}</div>

      <div className={styles["publication-card--avatar-img"]}>
        {avatar && <Image src={avatar} alt="avatar" width={50} height={50} />}
      </div>
    </div>
  );
};
