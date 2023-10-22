
export function Footer() {

    return (
      <footer className="flex flex-center justify-center w-full py-12 mt-8 border-t-2 border-t-black">
        <div className="">
          <div className="flex justify-center">
            <a
              className="flex pr-2 border-dashed border-b-4 border-b-yellow-js hover:border-black mb-4"
              href="https://github.com/Chd3451/next-intro.git"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <picture className="flex flex-center rounded-full">
                <img
                  width="92"
                  height="28"
                  loading="lazy"
                  src="https://midu.dev/logo.png"
                  alt="midudev logo"
                />
              </picture>
            </a>
          </div>
          <span>&bull;</span>
          <a
            className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
            href="https://github.com/Chd3451/next-intro.git"
            rel="nofollow noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <span>&bull;</span>
          <a
            className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
            href="#"
            rel="nofollow noreferrer"
            target="_blank"
          >
            YouTube
          </a>
          <span>&bull;</span>
          <a
            className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
            href="#"
            rel="nofollow noreferrer"
            target="_blank"
          >
            Twitch
          </a>
          <span>&bull;</span>
          
        </div>
      </footer>
    )
  }