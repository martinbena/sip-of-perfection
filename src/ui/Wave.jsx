import { motion } from "framer-motion";

const path1 =
  "M0 169L80 163C160 157 320 145 480 153.7C640 162.3 800 191.7 960 206C1120 220.3 1280 219.7 1360 219.3L1440 219V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V169Z";

const path2 =
  "M0 226L80 226.5C160 227 320 228 480 215.3C640 202.7 800 176.3 960 167.2C1120 158 1280 166 1360 170L1440 174V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V226Z";

function Wave() {
  const height = window.innerWidth <= 1344 ? 240 : 160;

  return (
    <svg
      viewBox={`0 110 1440 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M1440 0H0V339H1440V0Z" fill="#503000" />
        <motion.path
          d={path1}
          animate={{ d: [path1, path2] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut",
          }}
          fill="#FFDBA5"
        />
      </g>
    </svg>
  );
}

export default Wave;
