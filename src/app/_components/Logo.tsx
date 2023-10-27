import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="158.673"
        height="33"
        viewBox="0 0 158.673 33"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            y1="0.5"
            x2="1"
            y2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#3f2fdd" />
            <stop offset="0.35" stopColor="#3f6add" />
            <stop offset="1" stopColor="#3fe1dd" />
          </linearGradient>
        </defs>
        <text
          id="careerblob"
          transform="translate(23.673 25)"
          fill="#fff"
          fontSize="24"
          fontFamily="Poppins-SemiBold, Poppins"
          fontWeight="600"
        >
          <tspan x="0" y="0">
            careerblob
          </tspan>
        </text>
        <path
          id="Path_2417"
          data-name="Path 2417"
          d="M397.4,17.017c-.279-.026-.55-.047-.817-.063a9.425,9.425,0,0,0-6.557,1.866,9.189,9.189,0,0,0-2.732,4.247,13.2,13.2,0,0,0,2.1,11.9,11.134,11.134,0,0,0,8.866,4.361c5.52-.14,8.786-4.546,9.421-9.645.349-2.8.25-5.965-1.292-8.423-1.777-2.828-5.736-3.933-8.983-4.242Z"
          transform="translate(-386.687 -11.631)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </Link>
  );
};

export default Logo;
