export default function LawyerProfile() {
  return (
    <div className="w-full lg:w-auto flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6ce233a4d29bb970c9a21f907b474eb4655377a5?width=224"
          alt="Darlene Robertson"
          className="w-28 h-38 object-cover flex-shrink-0"
        />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_246_1385)">
                    <path
                      d="M14.8581 5.77846C14.8581 5.90941 14.7807 6.05227 14.626 6.20703L11.3849 9.36775L12.1528 13.832C12.1587 13.8737 12.1617 13.9332 12.1617 14.0106C12.1617 14.1356 12.1304 14.2413 12.0679 14.3276C12.0054 14.4139 11.9147 14.457 11.7956 14.457C11.6825 14.457 11.5635 14.4213 11.4385 14.3499L7.42955 12.2427L3.42062 14.3499C3.28967 14.4213 3.17062 14.457 3.06348 14.457C2.93848 14.457 2.84473 14.4139 2.78223 14.3276C2.71973 14.2413 2.68848 14.1356 2.68848 14.0106C2.68848 13.9749 2.69443 13.9154 2.70633 13.832L3.47419 9.36775L0.224191 6.20703C0.0753813 6.04632 0.000976562 5.90346 0.000976562 5.77846C0.000976562 5.55822 0.167643 5.42132 0.500977 5.36775L4.98312 4.71596L6.99205 0.65346C7.10514 0.409411 7.25098 0.287388 7.42955 0.287388C7.60812 0.287388 7.75395 0.409411 7.86705 0.65346L9.87598 4.71596L14.3581 5.36775C14.6915 5.42132 14.8581 5.55822 14.8581 5.77846Z"
                      fill="#FC9835"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_246_1385">
                      <rect
                        width="14.86"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ))}
            </div>
            <span className="text-xs text-[#333] opacity-70">(69 reviews)</span>
          </div>

          <div className="text-[15px] text-[#333] leading-6">
            120 Court St, Riverhead, NY,
            <br />
            11901-3003
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="text-xs text-[#333] opacity-70 tracking-[1.68px] uppercase">
              Practice Areas
            </div>
            <div className="text-[15px] text-[#333] leading-6">
              Family, Alimony, Adoption, Child
              <br />
              abuse, Child custody, Child
              <br />
              support, Divorce and separation,
              <br />
              Domestic violence, Marriage and
              <br />
              prenuptials
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 text-base bg-gradient-to-b from-[#0071BC] to-[#00D2FF] bg-clip-text text-transparent w-fit hover:opacity-80 transition-opacity">
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <g clipPath="url(#clip0_246_1404)">
            <path
              d="M9.08622 7.83036L2.46122 14.4554C2.34812 14.5685 2.21419 14.625 2.05943 14.625C1.90467 14.625 1.77074 14.5685 1.65765 14.4554L0.175502 12.9732C0.062407 12.8601 0.00585938 12.7262 0.00585938 12.5714C0.00585938 12.4167 0.062407 12.2827 0.175502 12.1696L4.91657 7.42857L0.175502 2.6875C0.062407 2.5744 0.00585938 2.44048 0.00585938 2.28571C0.00585938 2.13095 0.062407 1.99702 0.175502 1.88393L1.65765 0.401785C1.77074 0.28869 1.90467 0.232142 2.05943 0.232142C2.21419 0.232142 2.34812 0.28869 2.46122 0.401785L9.08622 7.02679C9.19931 7.13988 9.25586 7.27381 9.25586 7.42857C9.25586 7.58333 9.19931 7.71726 9.08622 7.83036Z"
              fill="#008CC9"
            />
          </g>
          <defs>
            <clipPath id="clip0_246_1404">
              <rect
                width="11.44"
                height="16"
                fill="white"
                transform="matrix(1 0 0 -1 0 16)"
              />
            </clipPath>
          </defs>
        </svg>
        View full profile
      </button>
    </div>
  );
}
