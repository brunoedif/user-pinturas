import Link from "next/link";

export default function Faq() {
  return (
    <div>
      <div className=" rounded-lg  py-8 ">
        <Link
          href="/"
          className="flex gap-[8px] mb-[8px] pl-[0] pr-[24px] py-[12px] text-[#5746af] w-[150px]"
        >
          <img src="https://wkncdn.com/newx/assets/build/img/signup/arrow-left.fc0b951aa.svg" />{" "}
          <p>Voltar</p>
        </Link>
        <h4 className="text-[#141414] font-['IBM_Plex_Sans',_sans-serif] text-[28px] not-italic font-normal leading-[40px]  mt-[8px] text-left">
          Perguntas frequentes
        </h4>
        <p className="mb-[24px] text-[14px] font-normal ">
          Caso não encontre o que procura, entre em contato
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Lorem ipsum dolor sit amet?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Consectetur adipisicing elit?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Neque eos, dignissimos provident reiciendis debitis?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Repudiandae commodi perferendis et itaque?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Similique fugiat cumque?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#5746af]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                Impedit iusto vitae dolorum, nostrum fugit?
              </h4>
              <p className="text-gray-600 my-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <Link
                href="#"
                className="text-[#5746af] hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
