import Link from "next/link";

export function Hero() {
  return (
    <body>
      <div
        id="wallpaper"
        className="wallpaper"
        data-image="images/chicago.jpg"
      ></div>
      <div className="content">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow"></div>
            <img
              id="pictureImage"
              className="picture-image"
              src="/images/slavo3.jpg"
              srcSet="images/slavo3.jpg 1x,
                       images/slavo@2x.jpg 2x,
                       images/slavo@3x.jpg 3x"
              alt="Portrait of Slavo_3 Software Web Engineer"
              width="320"
              height="320"
            />
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Slavo Popovic</h1>
          <p className="job">Software Web Engineer</p>
          <hr className="hr" />
          <div className="description">
            <p>
              I specialize in rapidly building online business,
              software companies and web applications
            </p>
            <Link href="https://www.nrgnomad.com">
              <a target="_blank">Blog: NRG Nomad</a>
            </Link>
          </div>
          <div className="contact">
            <a className="button">Contact me</a>
          </div>
          <ul className="social">
            <li>
              <Link href="https://twitter.com/slavo3dev">
                <a target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/slavo3dev">
                <a target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/slavopopovic/">
                <a target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/slavo_3">
                <a target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=Y82tn5yAqmI">
                <a target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </body>
  );
}
