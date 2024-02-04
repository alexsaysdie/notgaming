import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}




<body>
    <div class="navbar">
        <h1></h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="about-update.html">About Update</a></li>
                <li><a href="Bugs-report.html">Report Issue</a></li>
            </ul>
        </nav>
    </div>
    <div class="logo-container">
        <div class="logo">
            <img src="Images/enlarged logo.png" alt="Logo">
        </div>
    </div>
    <div class="big-title">
       Infmapi is back as <span class="purple-gradient">INFMAPX</span>
    </div>
    <p class="small-text">Still alpha version adding games by the day</p>
    <center>
        <button class="glow-on-hover" type="button" id="playButton">Play Now!</button>
    </center>
    <div class="line"></div>
    <script>
      const playButton = document.querySelector('#playButton');
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.bottom = '0';
    iframe.style.right = '0';

    playButton.addEventListener('click', () => {
        const newWindow = window.open('about:blank', '_blank');
        iframe.src = 'https://infmapi.netlify.app/selection.html';
        newWindow.document.body.appendChild(iframe);
    });
    </script>


</body>
