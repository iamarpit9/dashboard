import reactsvg from "./assets/react.svg";

const Sidebar = () => {
  return (
    <div className="col-span-1 overflow-hidden sidebar  w-full h-full  relative z-10">
      <div className="block max-w-[15rem] w-[15rem] shrink-0 py-4 h-full fixed top-0 pt-20 mt-3 bg-white border-r">
        <aside className="max-h-screen relative h-screen px-2 py-2.5 bg-background-0/75">
          <nav className="flex flex-col">
            <a
              href="#"
              className="overflow-x-hidden rounded-md text-sm text-letters-tertiary"
              style={{ transform: "none", color: "black" }}
            >
              <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
                <div className="flex items-center justify-center w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <rect
                      width="11.2941"
                      height="10.4478"
                      rx="2"
                      fill="#7B74FF"
                    ></rect>
                    <rect
                      x="12.7051"
                      width="11.2941"
                      height="10.4478"
                      rx="2"
                      fill="#7B74FF"
                    ></rect>
                    <rect
                      y="11.7539"
                      width="11.2941"
                      height="10.4478"
                      rx="2"
                      fill="#7B74FF"
                    ></rect>
                    <rect
                      x="12.7051"
                      y="11.7539"
                      width="11.2941"
                      height="10.4478"
                      rx="2"
                      fill="#7B74FF"
                    ></rect>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="grow whitespace-nowrap">Home</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="overflow-x-hidden rounded-md text-sm text-letters-tertiary"
              style={{ transform: "none", color: "black" }}
            >
              <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
                <div className="flex items-center justify-center w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                  >
                    <path
                      d="M0 7.63477L10.6185 13.1433C11.4847 13.5926 12.5153 13.5926 13.3815 13.1433L24 7.63477V17.0005C24 19.7619 21.7614 22.0005 19 22.0005H5C2.23858 22.0005 0 19.7619 0 17.0005V7.63477Z"
                      fill="#7B74FF"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 0C4.34315 0 3 1.34314 3 3V7.83584L11.0139 11.7605C11.8463 12.1682 12.8204 12.1682 13.6528 11.7605L21.6667 7.83584V3C21.6667 1.34315 20.3235 0 18.6667 0H6ZM9.63996 3.91797C8.91869 3.91797 8.33398 4.50268 8.33398 5.22395C8.33398 5.94522 8.91869 6.52992 9.63996 6.52992H13.6947C14.4159 6.52992 15.0007 5.94522 15.0007 5.22395C15.0007 4.50268 14.4159 3.91797 13.6947 3.91797H9.63996Z"
                      fill="#7B74FF"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="grow whitespace-nowrap">Job Invites</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="overflow-x-hidden rounded-md text-sm text-letters-tertiary"
              style={{ transform: "none", color: "black" }}
            >
              <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
                <div className="flex items-center justify-center w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 0C2.23858 0 0 2.23858 0 5V17.2015C0 19.963 2.23858 22.2015 5 22.2015H19C21.7614 22.2015 24 19.963 24 17.2015V5C24 2.23858 21.7614 0 19 0H5ZM8.45761 6.64441C8.53378 6.42059 8.84933 6.41778 8.92948 6.64021L12.3827 16.2235C12.9326 17.7497 15.0833 17.771 15.6634 16.256L17.1218 12.4467C17.1588 12.35 17.2517 12.2861 17.3552 12.2861H22.6673V10.7861H17.3552C16.6302 10.7861 15.9802 11.2332 15.7209 11.9104L14.2625 15.7196C14.1797 15.9361 13.8724 15.933 13.7939 15.715L10.3407 6.13171C9.77962 4.57472 7.57079 4.5944 7.03759 6.16116L5.52132 10.6166C5.48683 10.718 5.39168 10.7861 5.28465 10.7861H1.33398V12.2861H5.28465C6.03386 12.2861 6.69996 11.8092 6.94134 11.0999L8.45761 6.64441Z"
                      fill="#7B74FF"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="grow whitespace-nowrap">Analytics</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="overflow-x-hidden rounded-md text-sm text-letters-tertiary"
              style={{ transform: "none", color: "black" }}
            >
              <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
                <div className="flex items-center justify-center w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      d="M18.3333 6.1671C18.3333 9.57309 15.3486 12.3342 11.6667 12.3342C7.98477 12.3342 5 9.57309 5 6.1671C5 2.7611 7.98477 0 11.6667 0C15.3486 0 18.3333 2.7611 18.3333 6.1671Z"
                      fill="#7B74FF"
                    ></path>
                    <path
                      d="M0 20.334C0 17.0203 2.68629 14.334 6 14.334H18C21.3137 14.334 24 17.0203 24 20.334V22.9679H0V20.334Z"
                      fill="#7B74FF"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="grow whitespace-nowrap">My Profile</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="overflow-x-hidden rounded-md text-sm text-letters-tertiary"
              style={{ transform: "none", color: "black" }}
            >
              <div className="w-full h-fit flex items-center gap-2 flex-nowrap px-2 py-[0.32rem] rounded-md text-sm hover:bg-background-100">
                <div className="flex items-center justify-center w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M24.9707 12.1615C24.7728 9.33698 23.5826 6.67341 21.6104 4.64175C19.6383 2.6101 17.0112 1.34125 14.1939 1.05956C11.3765 0.777863 8.55023 1.50148 6.21487 3.10245C3.87951 4.70342 2.18548 7.07861 1.43233 9.80804C0.679171 12.5375 0.915404 15.4453 2.09926 18.0174C3.28311 20.5894 5.33832 22.66 7.90148 23.863C10.4646 25.066 13.3706 25.324 16.1056 24.5912C18.8406 23.8584 21.2283 22.1822 22.8467 19.8588"
                      fill="#7B74FF"
                    ></path>
                    <path
                      d="M24.9707 12.1615C24.7728 9.33698 23.5826 6.67341 21.6104 4.64175C19.6383 2.6101 17.0112 1.34125 14.1939 1.05956C11.3765 0.777863 8.55023 1.50148 6.21487 3.10245C3.87951 4.70342 2.18548 7.07861 1.43233 9.80804C0.679171 12.5375 0.915404 15.4453 2.09926 18.0174C3.28311 20.5894 5.33832 22.66 7.90148 23.863C10.4646 25.066 13.3706 25.324 16.1056 24.5912C18.8406 23.8584 21.2283 22.1822 22.8467 19.8588"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M24.9707 12.1615C25.2507 16.1522 18.2587 15.3788 15.7534 14.1428C17.6094 12.0095 16.2894 8.75883 12.7214 9.00817C10.3947 9.17083 8.8187 10.5508 9.00937 13.2775C9.3827 18.5975 14.9347 21.5508 22.8227 19.6642"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1.02933 13.8361C0.652 8.44547 12.652 4.19881 16.0267 10.2521"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13.8371 24.9695C9.84639 25.2495 6.95439 18.6695 9.08105 11.9722"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="grow whitespace-nowrap">Explore</p>
                </div>
              </div>
            </a>
          </nav>

          <hr className="mr-0 h-[0.09rem] mt-3 mb-5 bg-letters-tertiary/20" />

          <nav className="flex flex-col">
            <div className="flex flex-col mb-4">
              <h4 className="grow text-lg font-semibold text-brand-primary">
                Communities feed
              </h4>
              <div className="flex items-center justify-center text-sm p-1">
                <img src={reactsvg} alt="" />
                <div className="flex items-center p-3">
                  <p className="grow whitespace-nowrap">
                    Indonesia UI Designer <br />
                    <span className="text-xs">734 members</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-sm p-1">
                <img src={reactsvg} alt="" />
                <div className="flex items-center p-3">
                  <p className="grow whitespace-nowrap">
                    Indonesia UI Designer <br />
                    <span className="text-xs">734 members</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-sm p-1">
                <img src={reactsvg} alt="" />
                <div className="flex items-center p-3">
                  <p className="grow whitespace-nowrap">
                    Indonesia UI Designer <br />
                    <span className="text-xs">734 members</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="px-10 text-center text-xs text-letters-tertiary"></p>
          </nav>

          <div className="absolute w-[14rem] left-0 bottom-20 pr-5 py-8 text-inherit">
            <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-xs text-letters-tertiary">
              <a className=" hover:underline" href="/profile">
                About
              </a>
              <a className=" hover:underline" href="/profile">
                Accessibility
              </a>
              <a className=" hover:underline" href="/profile">
                Help
              </a>
              <a className=" hover:underline" href="/profile">
                Privacy &amp; Terms
              </a>
              <a className="hover:underline" href="/profile">
                Advertise
              </a>
              <a className=" hover:underline" href="/profile">
                more
              </a>
            </div>
            <div className="flex justify-center items-center mt-3 text-sm">
              <p className="font-bold">spehre.io</p>
              <span className="ml-1 text-xs text-letters-tertiary">© 2023</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
