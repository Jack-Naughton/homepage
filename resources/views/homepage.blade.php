<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>About Me</title>
    <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/homepage.css" rel="stylesheet" />
</head>
<body id="page-top">

<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Jack Naughton</span>
        <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" /></span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
        </ul>
    </div>
</nav>

<!-- Page Content-->
<div class="container-fluid p-0">
    <!-- About-->
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <h1 class="mb-0">
                Jack
                <span class="text-primary">Naughton</span>
            </h1>
            <div class="subheading mb-5">
                Brooklyn, NY ·
                <a href="mailto:jack.naughton18@gmail.com">jack.naughton18@gmail.com</a>
            </div>
            <p class="lead mb-5">Web Developer of <span id="years-experience"></span> years experience
                with a focus on backend technologies. Strong adherence to growing applications in a healthy
                and maintainable fashion. Advocate for writing descriptive, readable code. Always excited
                to learn new paradigms and toolsets.
            </p>
            <div class="social-icons">
                <a class="social-icon" href="https://www.linkedin.com/in/jack-m-naughton/">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="social-icon" href="https://github.com/Jack-Naughton">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </section>
    <hr class="m-0" />

    <!-- Experience-->
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Staff Software Engineer</h3>
                    <div class="subheading mb-3">Mailchimp</div>
                    <p>Led platform team to overhaul a 25 year old data model and codebase from a single to multi-channel marketing.</p>
                    <p>Introduced and owned data models which governed hundreds of billions of records for a user base of over 50 million.</p>
                    <p>Built integrations across cloud infrastructures including AWS and GCP to modernize outdated monolithic systems, using technologies such as Kafka and GraphQL.</p>
                    <p>Led and educated tech spec creations to clarify work requirements and streamline development processes using modern AI tooling such as Cursor, Copilot, and in-house models.</p>
                    <p>Created repeatable steps for tasks ranging from lift-and-shift data model replacements to common on-call troubleshooting.</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">February 2023 - Present</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Senior Software Engineer</h3>
                    <div class="subheading mb-3">Smallhold</div>
                    <p>Implemented an MQTT pub/sub messaging system to communicate with IoT vertical farming hardware.</p>
                    <p>Created a data-auditing trail to facilitate accountability and automatic rollbacks.</p>
                    <p>Added user roles/permissions to allow for site-based management and reduce in-house overhead.</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">March 2022 - January 2023</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Software Application Developer</h3>
                    <div class="subheading mb-3">Canoe Software</div>
                    <p>Added pdf table detection and reconstruction by integrating with AWS Lambda microservices.</p>
                    <p>Increased frontend data population speeds by 95% by replacing non-optimized sql queries with an ElasticSearch approach.</p>
                    <p>Refactored pdf scraping algorithms to improve modularity and service-based development while maintaining backwards compatibility.</p>
                    <p>Designed and implemented refactoring pipelines to replace json columns with proper relational data, improving data reusability and database performance.</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">March 2021 - March 2022</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Senior Web Developer</h3>
                    <div class="subheading mb-3">Ascend Learning</div>
                    <p>Doubled user capacity through analyzing and addressing bottlenecks on the application and database layers.</p>
                    <p>Introduced and enforced a TDD workflow to reduce production downtime by 23%.</p>
                    <p>Oversaw application pen-testing, removing critical security vulnerabilities, such as CSRF, XSS, and SQL Injection.</p>
                    <p>Migrated production databases to a new data model to align with business practices and ease the development of a new CMS.</p>
                    <p>Built an internal management tool, removing inter-team dependencies and support tickets by 30%.</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">March 2019 - March 2021</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Full-stack Developer</h3>
                    <div class="subheading mb-3">Blackrocket LLC</div>
                    <p>Replaced a spreadsheet-focused workflow with a custom CRM, integrating data to facilitate business insights and create automations.</p>
                    <p>Built a client-facing admin interface to enable partners' staff management, reducing redundancies and allowing for streamlined schedule creation.</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">September 2015 - September 2018</span></div>
            </div>
        </div>
    </section>
    <hr class="m-0" />

    <!-- Skills-->
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Languages & Tools</div>
            <ul class="list-inline dev-icons">
                <li class="list-inline-item"><i class="fab fa-php"></i></li>
                <li class="list-inline-item"><i class="fab fa-laravel"></i></li>
                <li class="list-inline-item"><i class="fab fa-python"></i></li>
                <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                <li class="list-inline-item"><i class="fab fa-github"></i></li>
                <li class="list-inline-item"><i class="fab fa-docker"></i></li>
                <li class="list-inline-item"><i class="fab fa-aws"></i></li>
                <li class="list-inline-item"><i class="fas fa-database"></i></li>
                <li class="list-inline-item"><i class="fab fa-linux"></i></li>
                <li class="list-inline-item"><i class="fab fa-apple"></i></li>
                <li class="list-inline-item"><i class="fab fa-jira"></i></li>
                <li class="list-inline-item"><i class="fab fa-atlassian"></i></li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Test Driven Development
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Agile Development & Scrum
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    CI / CD
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Cross Functional Teams
                </li>
            </ul>
        </div>
    </section>
    <hr class="m-0" />

    <!-- Interests-->
    <section class="resume-section" id="interests">
        <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>Apart from being a developer, I try to spend plenty of time outdoors.
                I enjoy going on runs around Prospect Park and taking long, scenic walks through NYC at-large.
                When able to escape the city, I hike the Appalachians and Catskills.
            </p>
            <p class="mb-0">
                Indoors, I cycle between a list of rotating hobbies including cross-stitching, video games,
                reading, board games, Dungeons and Dragons, and complimenting my cat. I try to be a minimalist
                and appreciate the moment while filling my days with high quality friends and activities.
            </p>
        </div>
    </section>
    <hr class="m-0" />

    <!-- Education-->
    <section class="resume-section" id="education">
        <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Montclair State University</h3>
                    <div class="subheading mb-3">Bachelor of Philosophy</div>
                    <p>GPA: 3.65</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">August 2011 - May 2015</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
                <div class="flex-grow-1">
                    <h3 class="mb-0">St. Joseph High School</h3>
                    <div class="subheading mb-3">Math and Computer Focus</div>
                    <p>GPA: 3.8</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">August 2007 - May 2011</span></div>
            </div>
        </div>
    </section>
    <hr class="m-0" />
</div>
<!-- Bootstrap core JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Third party plugin JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
<!-- Core theme JS-->
<script src="js/homepage.js"></script>
<!-- Personal scripts-->
<script>
    document.getElementById('years-experience').innerHTML = new Date().getFullYear() - 2015;
</script>
</body>
</html>
