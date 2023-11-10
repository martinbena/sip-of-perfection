import { motion } from "framer-motion";
const path1 =
  "M0 124L48 127.5C96 131 192 138 288 135.7C384 133.3 480 121.7 576 116C672 110.3 768 110.7 864 117.3C960 124 1056 137 1152 137.5C1248 138 1344 126 1392 120L1440 114V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V124Z";

const path2 =
  "M0 130L48 127.5C96 125 192 120 288 122.7C384 125.3 480 135.7 576 140.3C672 145 768 144 864 139.5C960 135 1056 127 1152 124C1248 121 1344 123 1392 124L1440 125V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V130Z";

function Wave() {
  return (
    <svg viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M1440 0H0V339H1440V0Z" fill="#503000" />
        <motion.path
          d={path1}
          animate={{ d: [path1, path2] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          fill="#F5F8F5"
        />
      </g>
    </svg>
  );
}

export default Wave;
