import cover from "./assets/cover.jpeg";
import reactsvg from "./assets/react.svg";

const MainContent = () => {
  return (
    <>
      <div className=" relative col-span-3 w-full max-h-screen min-h-screen h-screen overflow-y-auto flex flex-col z-0">
        <div className="bg-[#f6f9ff] h-full shadow">
          <main className="relative h-full pb-24 overflow-y-auto grow">
            <div className=" relative h-48">
              <img
                className="w-full h-full object-cover"
                src={cover}
                alt="avatar_background"
              />
            </div>
            <div className="flex relative h-auto py-5 left-60">
              <div className="flex flex-col items-center w-80 px-4">
                <div className="relative h-[6rem] ">
                  <div className="absolute -translate-x-1/2 bottom-0 w-44 h-44 p-1 rounded-full bg-white">
                    <img
                      className="w-full h-full object-contain rounded-full"
                      src={reactsvg}
                      alt="user avatar"
                    />
                  </div>
                </div>
                <div className="text-center mt-1">
                  <p className="text-xl font-semibold text-[#2B276C]">Name</p>
                  <p className="text-black/60 text-sm font-normal">Position</p>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[#2B276C]">
                  <p className="cursor-pointer text-xs">21 Followers</p>
                  <p className="cursor-pointer text-xs">43 Following</p>
                </div>

                <div className="w-full mt-5">
                  <div className="flex gap-2 justify-between">
                    <div className="grow">
                      <h4 className="font-medium text-[#2B276C] text-sm">
                        Make my profile visible to employers
                      </h4>
                    </div>
                    <div className="shrink-0">
                      <button
                        className="flex items-center justify-end bg-brand-primary w-10 h-5 p-0.5 rounded-3xl shadow-inner"
                        tabIndex="0"
                        style={{ backgroundColor: "rgb(123, 116, 255)" }}
                      >
                        <div
                          className="h-full aspect-square rounded-full bg-white shadow"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        ></div>
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-black/60">
                    Your profile and career goals will appear when employers
                    search our database for candidates.
                  </p>
                  <div className="grid grid-cols-2 mt-10">
                    <div className="flex items-center">
                      <h4 className="font-medium text-[#2B276C] text-sm">
                        Online Links
                      </h4>
                    </div>
                    <div className="flex justify-end items-center"></div>
                  </div>
                  <p className="mt-1 text-xs text-black/60">
                    Add your online portfolio links to increase your profile
                    strength.
                  </p>
                  <div className="grow flex justify-center gap-1">
                    <p className="text-primary-default/40 py-2 text-xs w-full text-center">
                      No links found
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center p-4 border rounded-xl mt-6 border-brand-primary/50 bg-brand-primary/5">
                  <h3 className="text-sm font-medium text-center">
                    Wheel of Opportunities{" "}
                  </h3>
                </div>

                <div className="w-full mt-6">
                  <h3 className="text-sm font-medium">Your Ranking</h3>
                  <div className="mt-4 flex items-center w-full h-6 rounded-2xl border border-brand-primary/50 bg-brand-primary/5 p-1">
                    <div
                      className="h-4 rounded-2xl"
                      style={{
                        width: "73%",
                        background:
                          "linear-gradient(90deg, rgb(107, 99, 255) -10.52%, rgb(178, 51, 222) 129.45%)",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2 text-xs text-black text-center">
                    {`Hurray! You're in the top`}
                    <span className="text-base font-semibold text-[#8750F2] pl-1">
                      27%
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="w-2/4  m-4 p-3 border rounded-lg border-[#e8efff] bg-white"
                style={{ boxShadow: "rgba(131, 139, 180, 0.25) 2px 2px 8px" }}
              >
                <div className="grid grid-cols-4 border-b-2">
                  <a
                    aria-current="page"
                    className="relative top-[1px] px-5 py-2 text-center border-b-4 border-purple-400 text-letters-secondary font-semibold"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="relative top-[1px] px-5 py-2 text-center font-medium text-black"
                    href="/profile/skills"
                  >
                    Skills &amp; Certificates
                  </a>
                  <a
                    className="relative top-[1px] px-5 py-2 text-center font-medium text-black"
                    href="/profile/posts"
                  >
                    Posts
                  </a>
                  <a
                    className="relative top-[1px] px-5 py-2 text-center font-medium text-black"
                    href="/profile/spaces"
                  >
                    Spaces
                  </a>
                </div>
                <div className="flex flex-col gap-5 p-4">
                  <div className="flex justify-between items-center gap-5 mb-3">
                    <p className="w-full max-w-full text-sm text-letters-tertiary text-justify">
                      <span className="text-gray-400">
                        Add description about you here
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex flex-col grow overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                      <div className="">
                        <p className="font-semibold text-letters-secondary text-xl">
                          Experience
                        </p>
                        <p className="text-sm text-letters-tertiary">
                          Add your work experiences
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-letters-secondary text-2xl"
                        aria-describedby="popup-4"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="circle-plus"
                          className="svg-inline--fa fa-circle-plus text-brand-primary"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="grow flex items-center justify-center p-8">
                        <h3 className="text-base font-medium text-primary-default/75">
                          Add items to show here!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex flex-col grow overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                      <div className="">
                        <p className="font-semibold text-letters-secondary text-xl">
                          Education
                        </p>
                        <p className="text-sm text-letters-tertiary">
                          Add your schooling information
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-letters-secondary text-2xl"
                        aria-describedby="popup-4"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="circle-plus"
                          className="svg-inline--fa fa-circle-plus text-brand-primary"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="grow flex items-center justify-center p-8">
                        <h3 className="text-base font-medium text-primary-default/75">
                          Add items to show here!
                        </h3>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainContent;
