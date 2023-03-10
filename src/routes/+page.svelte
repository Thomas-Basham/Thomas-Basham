<script>
  import GitHubCalendar from "github-calendar";
  import { onMount } from "svelte";
  import ThemeStore, { setTheme } from "svelte-themes/themeStore";
  // import { setTheme} from 'svelte-themes';

  let showForm = true;
  function sendEmail(e) {
    let email = import.meta.env.VITE_COMPANY_EMAIL;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: import.meta.env.VITE_COMPANY_EMAIL,
      Password: import.meta.env.VITE_SMTP_ELASTIC_MAIL_PASSWORD,
      To: email,
      From: e.target.user_email.value,
      Subject: "You have a new message from " + e.target.user_name.value,
      Body: `<html><h2>New Message</h2><strong>${e.target.message.value}</strong><br></br><em>Italic</em></html>`,
    }).then((message) => {
      showForm = false;
      console.log(message);
    });
  }
  onMount(() => {
    // CHECKS THE DARK MODE SWITCH IF LOCAL STORAGE 'theme' OR SYSTEM THEME IS SET TO DARK.
    if ($ThemeStore.theme == "dark") {
      window.$("#darkSwitch").prop("checked", true);
    }

    //Enable tooltips everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

    window.$("#rss-feeds").rss(
      //Change this to your own rss feeds
      //   "http://feeds.feedburner.com/premiumpixels",
      "http://medium.com/feed/@bashamtg",
      {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,

        // will request the API via https
        // default: false
        // valid values: false, true
        ssl: true,

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate:
          '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
      }
    );
    // rss.render();

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "thomas-basham", { responsive: true });

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "thomas-basham", selector: "#ghfeed" });
  });
</script>

<svelte:head>
  <script src="https://smtpjs.com/v3/smtp.js"></script>
</svelte:head>
<!-- ******HEADER****** -->
<header class="header">
  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <img
          width="180px"
          height="180px"
          class="profile-image img-fluid float-start rounded-circle"
          src="images/profile.jpg"
          alt="profile "
        />
        <div class="profile-content">
          <h1 class="name">Thomas Basham</h1>
          <h2 class="desc">Full Stack Software Developer</h2>
          <ul class="social list-inline">
            <!-- <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li> -->
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/thomas-basham"
                ><i class="fab fa-linkedin-in" /></a
              >
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/thomas-Basham"
                ><i class="fab fa-github-alt" /></a
              >
            </li>
            <!-- <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow"></i></a></li>    -->
            <li class="list-inline-item last-item">
              <a href="https://leetcode.com/Thomas-Basham"
                ><i class="fab fa-solid fa-code" /></a
              >
            </li>
          </ul>
        </div>
        <!--//profile-->
      </div>
      <!--//col-->
      <div class="col-12 col-md-auto">
        <div class="dark-mode-switch d-flex">
          <div class="form-check form-switch mx-auto mx-md-0">
            <input
              on:input={() =>
                setTheme($ThemeStore.theme == "dark" ? "light" : "dark")}
              type="checkbox"
              class="form-check-input me-2"
              id="darkSwitch"
            />
            <label class="custom-control-label" for="darkSwitch"
              >Dark Mode</label
            >
          </div>
        </div>
        <!--//dark-mode-switch-->
        <a class="btn btn-cta-primary" href="#contact-me" target="_blank"
          ><i class="fas fa-paper-plane" /> Contact Me</a
        >
      </div>
      <!--//col-->
    </div>
    <!--//row-->
  </div>
  <!--//container-->
</header>
<!--//header-->

<div class="container sections-wrapper py-5">
  <div class="row">
    <div class="primary col-lg-8 col-12">
      <section class="about section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">About Me</h2>
          <div class="content">
            <p>
              Greetings, I am a software developer with a year of experience
              under my belt. I pursued my education in computer science at Code
              Fellows and have been honing my skills ever since. Prior to my
              career in tech, I worked as a carpenter, developing skills that
              have proven to be invaluable in my current profession, such as
              attention to detail and problem-solving. Additionally, I am a US
              army veteran who served from 2011-2015. I am based in Renton, WA
              and eager to continue growing my knowledge and contributing to the
              industry.
            </p>
          </div>
          <!--//content-->
        </div>
      </section>

      <section class="latest section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Latest Projects</h2>
          <div class="content">
            <div class="item featured text-center">
              <div class="featured-image has-ribbon">
                <a
                  class=""
                  href="https://collab-done.vercel.app/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <img
                    class="img-fluid project-image rounded shadow-sm"
                    src="images/projects/collab-done.png"
                    alt="project name"
                  />
                </a>
                <div class="ribbon">
                  <div class="text">New</div>
                </div>
              </div>

              <h3 class="title mb-3">
                Colab Done - A social media web app used to help musicians
                connect and collaborate
              </h3>

              <div class="desc text-start">
                <p>
                  Collab Done is a social media web application designed for
                  musicians to connect and collaborate. Users can upload
                  unfinished song clips, view other artists' uploads, play,
                  pause, and skip to sections in a song with audio
                  visualization, comment on specific spots in a song, and send
                  direct messages to other users. It's built using Reactjs,
                  Nextjs, Supabase, Wavesurferjs, Bootstrap, and React-Icons and
                  is deployed on Vercel.
                </p>
              </div>
              <!--//desc-->
              <a
                class="btn btn-cta-third me-4"
                href="https://collab-done.vercel.app/"
                target="_blank"
                rel="noreferrer nofollow">View Demo</a
              >
              <a
                class="btn btn-cta-third"
                href="https://github.com/Thomas-Basham/collab-done#readme"
                target="_blank"
                rel="noreferrer nofollow">View Code</a
              >
            </div>
            <hr class="divider" />
            <div class="item row">
              <a
                class="col-md-4 col-12"
                href="https://trout-finder.vercel.app"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <img
                  class="img-fluid project-image rounded shadow-sm"
                  src="images/projects/trout-finder.png"
                  alt="project name"
                />
              </a>
              <div class="desc col-md-8 col-12">
                <h3 class="title">
                  Trout Finder - The ultimate guide for stocked trout in
                  Washington
                </h3>
                <p class="mb-2">
                  Trout Finder is a web application built with Python and Flask
                  that displays statistics on the number of trout fish stocked
                  in various lakes across Washington State. The app utilizes web
                  scraping techniques with the BeautifulSoup library to gather
                  data from various sources and SQLAlchemy to process and
                  analyze the data. A PostgreSQL database is used to store the
                  collected data. Additionally, a Github Cron job is set up to
                  run the data collection process automatically at specified
                  intervals. This app is intended for fishing enthusiasts and
                  researchers who want to stay up-to-date on the current trout
                  population in Washington's lakes.
                </p>
                <p>
                  <a
                    class="more-link me-4"
                    href="https://trout-finder.vercel.app"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Demo</a
                  >
                  <a
                    class="more-link"
                    href="https://github.com/Thomas-Basham/trout-finder#readme"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Code</a
                  >
                </p>
              </div>
              <!--//desc-->
            </div>
            <div class="item row">
              <a
                class="col-md-4 col-12"
                href="https://music-api-bashamtg.vercel.app"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <img
                  class="img-fluid project-image rounded shadow-sm"
                  src="images/projects/music-api.png"
                  alt="project name"
                />
              </a>
              <div class="desc col-md-8 col-12">
                <h3 class="title">
                  Music API - A Full Stack API for storing royalty free music
                </h3>
                <p class="mb-2">
                  Music API is a powerful Full Stack web application that allows
                  users to store royalty-free music easily. Built using Django
                  Rest Framework, PostgreSQL, Paginator, Wavsurfer.js,
                  Cloudinary Storage, and WebAudio-Controls, this API provides a
                  complete solution for storing, managing, and playing back
                  music tracks. With the API's integration of Cloudinary
                  Storage, users can efficiently store and retrieve multimedia
                  files. Wavsurfer.js provides a user-friendly interface for
                  visualizing audio, paired with WebAudio-Controls, it offers an
                  excellent option for controlling audio playback.
                </p>
                <p>
                  <a
                    class="more-link me-4"
                    href="https://music-api-bashamtg.vercel.app/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Demo</a
                  >
                  <a
                    class="more-link"
                    href="https://github.com/Thomas-Basham/Music-API#readme"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Code</a
                  >
                </p>
              </div>
              <!--//desc-->
            </div>
            <div class="item row">
              <a
                class="col-md-4 col-12"
                href="https://trails-api-thomas-basham.herokuapp.com"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <img
                  class="img-fluid project-image rounded shadow-sm"
                  src="images/projects/trails-api.png"
                  alt="project name"
                />
              </a>
              <div class="desc col-md-8 col-12">
                <h3 class="title">
                  Trails API - A simple way to store your favorite hiking
                  trails.
                </h3>
                <p class="mb-2">
                  Trails API is a Full-Stack Django Rest Framework API designed
                  for storing and managing favorite hiking trails. Once users
                  log in, they can add a trail by simply pasting a link from
                  WTA.org, where the data is scraped to build the map. The API
                  is built with Django Rest Framework, PostgreSQL, Pandas,
                  Folium, and Beautiful Soup. PostgreSQL is used as the database
                  management system, while Pandas is utilized for data
                  manipulation. Folium is a powerful Python library that's
                  employed to create maps, and Beautiful Soup is used for web
                  scraping.
                </p>
                <p>
                  <a
                    class="more-link me-4"
                    href="https://trails-api-thomas-basham.herokuapp.com"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Demo</a
                  >
                  <a
                    class="more-link"
                    href="https://github.com/Thomas-Basham/hiking-trails-api#readme"
                    target="_blank"
                    rel="noreferrer nofollow"
                    ><i class="fas fa-external-link-alt" />Code</a
                  >
                </p>
              </div>
              <!--//desc-->
            </div>
          </div>
          <!--//content-->
        </div>
      </section>

      <!-- <section class="projects section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Other Projects</h2>
          <div class="content">
            <div class="item">
              <h3 class="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                  target="_blank"
                  >Pillar - Free Boootstrap Resume/CV Template for Developers</a
                > <span class="badge badge-theme">Free</span>
              </h3>
              <p class="summary">
                Provide a brief description of your project. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatu.
              </p>
              <p>
                <a
                  class="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                  target="_blank"
                  ><i class="fas fa-external-link-alt" />Download Now</a
                >
              </p>
            </div>
            <div class="item">
              <h3 class="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                  target="_blank"
                  >DevBlog - Free Boootstrap Blog Template for Developers</a
                > <span class="badge badge-theme">Free</span>
              </h3>
              <p class="summary">
                Provide a brief description of your project. Maecenas ornare
                ultricies risus, in fermentum augue consectetur in. Vestibulum
                vitae mauris iaculis, sollicitudin velit in, molestie nulla.
              </p>
              <p>
                <a
                  class="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                  target="_blank"
                  ><i class="fas fa-external-link-alt" />Download Now</a
                >
              </p>
            </div>
            <div class="item">
              <h3 class="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                  target="_blank"
                  >Nova - Free App Landing Page Template for App Developers</a
                > <span class="badge badge-theme">Free</span>
              </h3>
              <p class="summary">
                Provide a brief description of your project. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. In vel purus enim. Etiam
                tortor felis, fermentum ac ultrices sed.
              </p>
              <p>
                <a
                  class="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                  target="_blank"
                  ><i class="fas fa-external-link-alt" />Download Now</a
                >
              </p>
            </div>

            <a class="btn btn-cta-secondary" href="#"
              >More on GitHub <i class="fas fa-chevron-right pt-1" /></a
            >
          </div>
        </div>
      </section> -->

      <section class="experience section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Work Experience</h2>
          <div class="content">
            <div class="item">
              <h3 class="title">
                Custom Closet Carpenter - <span class="place"
                  ><a
                    href="https://www.containerstore.com/custom-spaces/closet"
                    target="_blank"
                    rel="noreferrer nofollow">The Container Store</a
                  ></span
                > <span class="year">(2021 - 2022)</span>
              </h3>
              <p>
                As a Custom Closet Carpenter at The Container Store, I built 5
                custom closets per week to meet customer needs. I worked closely
                with sales associates and project managers to ensure accurate
                scoping and estimation. Using precision tools, I achieved a 99%
                accuracy rate in all builds. This experience showcases my
                attention to detail and ability to deliver quality work in a
                fast-paced environment, skills that translate well to software
                development.
              </p>
            </div>
            <div class="item">
              <h3 class="title">
                Maintenance Carpenter - <span class="place"
                  ><a
                    href="https://westmarkconst.com"
                    target="_blank"
                    rel="noreferrer nofollow">Westmark Construction</a
                  ></span
                > <span class="year">(2019 - 2022)</span>
              </h3>
              <p>
                As a Lead Carpenter at Westmark Construction, I collaborated
                with a team to complete over $800,000 of work/repairs annually
                on commercial buildings. I resolved maintenance issues and
                managed equipment worth over $60,000, ensuring efficiency and
                proper maintenance. My critical problem-solving skills enabled
                me to complete all requests, while my leadership abilities
                ensured a smooth operation. Overall, my experience demonstrates
                my ability to lead and manage resources effectively, skills that
                will translate well into software development.
              </p>
            </div>

            <div class="item">
              <h3 class="title">
                Calvary Scout (Sergeant) - <span class="place"
                  ><a href="#" target="_blank" rel="noreferrer nofollow"
                    >US Army</a
                  ></span
                > <span class="year">(2018 - 2019)</span>
              </h3>
              <p>
                As a Calvary Scout in the US Army, I was responsible for
                operating weapons systems and vehicles to support combat
                operations. I also trained and mentored team members on combat
                tactics and techniques, demonstrating my leadership abilities
                and dedication to mission success. Throughout my service,
                effective communication was crucial, and I consistently
                communicated with team members and superiors to ensure mission
                objectives and goals were clear. My experience as a Calvary
                Scout in the US Army highlights my ability to operate complex
                equipment, train and mentor others, and communicate effectively.
                These skills will translate well into software development,
                where effective communication, leadership, and problem-solving
                are also essential.
              </p>
            </div>
          </div>
          <!--//content-->
        </div>
      </section>

      <section class="github section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">My GitHub</h2>

          <div id="github-graph" class="github-graph" />

          <div id="ghfeed" class="ghfeed" />
        </div>
      </section>
    </div>
    <div class="secondary col-lg-4 col-12">
      <aside class="info aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading sr-only">Basic Information</h2>
          <div class="content">
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-map-marker-alt" />
                <span class="sr-only">Location: </span>Renton, WA
              </li>
              <li>
                <i class="fas fa-envelope" /><span class="sr-only">Email:</span
                ><a href="mailto: bashamtg@gmail.com">bashamtg@gmail.com</a>
              </li>
              <li>
                <i class="fas fa-link" /><span class="sr-only">Website:</span><a
                  href="https://www.linkedin.com/in/thomas-basham"
                  >linkedin.com/in/thomas-basham</a
                >
              </li>
            </ul>
          </div>
          <!--//content-->
        </div>
      </aside>
      <!--//aside-->

      <aside class="skills aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Skills</h2>
          <div class="content">
            <p class="intro">
              I have a strong skillset in web development, with expertise in
              Python and Django. I am proficient in JavaScript and React, and
              have experience working with front-end frameworks such as
              Bootstrap, Tailwind, and Material UI. My knowledge of HTML5, CSS3,
              and SASS is also advanced, making me a versatile developer who can
              handle a variety of projects.
            </p>

            <div class="skillset">
              <div class="item">
                <h3 class="level-title">
                  Python &amp; Django<span
                    class="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                    ><i class="fas fa-info-circle" />Expert</span
                  >
                </h3>

                <div class="level-bar progress">
                  <div
                    class="progress-bar level-bar-inner"
                    role="progressbar"
                    style="width: 96%"
                    aria-valuenow="96"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  />
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">
                  Javascript &amp; React<span
                    class="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                    ><i class="fas fa-info-circle" />Proficient</span
                  >
                </h3>
                <div class="level-bar progress">
                  <div
                    class="progress-bar level-bar-inner"
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  />
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">
                  Bootstrap, Tailwind, &amp; Material UI<span
                    class="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                    ><i class="fas fa-info-circle" />Proficient</span
                  >
                </h3>
                <div class="level-bar progress">
                  <div
                    class="progress-bar level-bar-inner"
                    role="progressbar"
                    style="width: 88%"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  />
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">
                  HTML5, CSS3, SASS <span
                    class="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                    ><i class="fas fa-info-circle" />Proficient</span
                  >
                </h3>
                <div class="level-bar progress">
                  <div
                    class="progress-bar level-bar-inner"
                    role="progressbar"
                    style="width: 83%"
                    aria-valuenow="83"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  />
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">
                  Svelte<span
                    class="level-label"
                    data-bs-toggle="tooltip"
                    data-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                    ><i class="fas fa-info-circle" />Learning</span
                  >
                </h3>
                <div class="level-bar progress">
                  <div
                    class="progress-bar level-bar-inner"
                    role="progressbar"
                    style="width: 68%"
                    aria-valuenow="68"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--//content-->
          <img
            alt="top languages from github"
            width="100%"
            src={$ThemeStore.theme == "dark"
              ? "https://github-readme-stats.vercel.app/api/top-langs/?username=thomas-basham&exclude_repo=data-structures-and-algorithms&langs_count=5&hide=c,cython&range=last_6_months&bg_color=1e2124&hide_border=true&theme=dark"
              : "https://github-readme-stats.vercel.app/api/top-langs/?username=thomas-basham&exclude_repo=data-structures-and-algorithms&langs_count=5&hide=c,cython&range=last_6_months&hide_border=true&title_color=545e69"}
            frameborder="0"
          />
          <p>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              class="more-link"
              href="https://github.com/thomas-Basham"
              ><i class="fas fa-external-link-alt" />More on GitHub</a
            >
          </p>
        </div>
      </aside>

      <!-- <aside class="testimonials aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Testimonials</h2>
          <div class="content">
            <div class="item">
              <blockquote class="quote">
                <p>
                  <i class="fas fa-quote-left" />Thomas is an excellent software
                  engineer and he is passionate about what he does. You can
                  totally count on him to deliver your projects!
                </p>
              </blockquote>
              <p class="source">
                <span class="name">Tim Adams</span><br /><span class="title"
                  >Curabitur commodo</span
                >
              </p>
            </div>

            <p>
              <a class="more-link" href="#"
                ><i class="fas fa-external-link-alt" />More on Linkedin</a
              >
            </p>
          </div>
        </div>
      </aside> -->

      <aside class="education aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Education</h2>
          <div class="content">
            <div class="item">
              <h3 class="title">
                <i class="fas fa-graduation-cap" /> Certificate in Software Development
              </h3>
              <h4 class="university">
                Code Fellows <span class="year">(2022-2023)</span>
              </h4>
            </div>
            <div class="item">
              <h3 class="title">
                <i class="fas fa-graduation-cap" /> Certificate in Music Production
              </h3>
              <h4 class="university">
                Icon Collective College of Music <span class="year"
                  >(2020-2021)</span
                >
              </h4>
            </div>
          </div>
          <!--//content-->
        </div>
      </aside>

      <aside class="languages aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Languages</h2>
          <div class="content">
            <ul class="list-unstyled">
              <li class="item">
                <span class="title"><strong>English:</strong></span>
                <span class="level"
                  >Native Speaker <br class="visible-xs" /><i
                    class="fas fa-star"
                  /> <i class="fas fa-star" /> <i class="fas fa-star" />
                  <i class="fas fa-star" /> <i class="fas fa-star" />
                </span>
              </li>
              <li class="item">
                <span class="title"><strong>Spanish:</strong></span>
                <span class="level"
                  >Learning <br class="visible-sm visible-xs" /><i
                    class="fas fa-star"
                  /> <i class="fas fa-star-half" /></span
                >
              </li>
            </ul>
          </div>
          <!--//content-->
        </div>
      </aside>

      <aside class="blog aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Latest Blog Posts</h2>

          <div id="rss-feeds" class="content" />
          <!--//content-->
        </div>
      </aside>

      <aside class="list music aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Favorite coding music</h2>
          <div class="content">
            <ul class="list-unstyled">
              <li>
                <iframe
                  title="spotify song"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/3Pzh926pXggbMe2ZpXyMV7?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>
              <li>
                <iframe
                  title="spotify song"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/0tIPqaFrCUw8XylAt9rr3g?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>
              <li>
                <iframe
                  title="spotify song"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/6K4t31amVTZDgR3sKmwUJJ?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>
              <li>
                <iframe
                  title="spotify song"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/0eu4C55hL6x29mmeAjytzC?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>
              <li>
                <iframe
                  title="spotify song"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/4NFD9ea0uH0MtoC30yNYE1?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </li>

              <!-- <li>
                <i class="fas fa-headphones" />
                <a href="#">Duis et felis bibendum</a>
              </li> -->
            </ul>
          </div>
          <!--//content-->
        </div>
      </aside>

      <!-- <aside class="list conferences aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Conferences</h2>
          <div class="content">
            <ul class="list-unstyled">
              <li>
                <i class="far fa-calendar-alt" />
                <a href="#" target="_blank">WWDC 2030</a> (San Francisco)
              </li>
              <li>
                <i class="far fa-calendar-alt" /> <a href="#">Hive</a> (Seattle)
              </li>
            </ul>
          </div>
        </div>
      </aside> -->

      <aside class="credits aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Credits</h2>
          <div class="content">
            <ul class="list-unstyled pb-2">
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />Bootstrap</a
                >
              </li>
              <li>
                <a
                  href="https://fontawesome.com"
                  target="_blank"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />FontAwesome</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/IonicaBizau/github-calendar"
                  target="_blank"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />GitHub Calendar Plugin</a
                >
              </li>

              <li>
                <a
                  href="https://caseyscarborough.com/projects/github-activity/"
                  target="_blank"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />GitHub Activity Stream</a
                >
              </li>

              <li>
                <a
                  href="https://github.com/sdepold/vanilla-rss"
                  target="_blank"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />Vanilla RSS</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/coliff/dark-mode-switch"
                  rel="noreferrer nofollow"
                  ><i class="fas fa-external-link-alt" />Dark Mode Switch</a
                >
              </li>
            </ul>
          </div>
          <!--//content-->
        </div>
      </aside>
      <aside class="contact aside section">
        <div class="section-inner shadow-sm rounded">
          <h2 class="heading">Contact Me</h2>
          <div class="content">
            <ul class="list-unstyled pb-2">
              <li>
                <i class="fas fa-envelope" />
                <span class="sr-only">Email: </span><a
                  href="mailto: bashamtg@gmail.com"
                >
                  bashamtg@gmail.com</a
                >
              </li>
              <li>
                <i class="fas fa-phone" />
                <span class="sr-only">Phone: </span><a href="tel: 2532582526">
                  253-258-2526</a
                >
              </li>
            </ul>
            <div id="contact-me">
              {#if showForm}
                <form on:submit|preventDefault={sendEmail}>
                  <h3 class="">Send me a message</h3>
                  <div class="d-inline-flex pb-2 w-100">
                    <input
                      placeholder="Name*"
                      class="form-control me-2 "
                      required
                      type="text"
                      name="user_name"
                    />
                    <input
                      placeholder="Email*"
                      class="form-control"
                      required
                      type="email"
                      name="user_email"
                    />
                  </div>
                  <textarea
                    placeholder="Message..."
                    class="form-control mb-4"
                    required
                    name="message"
                  />
                  <input class="form-control" type="submit" value="Send" />
                </form>
              {/if}
              {#if !showForm}
                <div>
                  Thanks For your message. I will respond as soon as I can!
                </div>
              {/if}
            </div>
          </div>
          <!--//content-->
        </div>
      </aside>
    </div>
    <!--//secondary-->
  </div>
  <!--//row-->
</div>
<!--//masonry-->

<!-- ******FOOTER****** -->
<footer class="footer">
  <div class="container text-center">
    <!--/* This template is free as long as you keep the attribution link below. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
    <small class="copyright"
      >Designed with <span class="sr-only">love</span><i class="fas fa-heart" />
      by
      <a
        href="https://themes.3rdwavemedia.com"
        target="_blank"
        rel="noreferrer nofollow">Xiaoying Riley</a
      > for developers</small
    >
  </div>
  <!--//container-->
</footer>
<!--//footer-->
