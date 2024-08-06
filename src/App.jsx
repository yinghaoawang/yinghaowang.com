import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <section>
        <h4>Projects in Progress</h4>
        <details>
          <summary>
            <a href='https://spoti-free.com'>Spotifree (2024)</a> - Spotify for
            free and on the web
          </summary>
          <li>A free Spotify clone.</li>
          <li>Utilized: ReactJS, Youtube API, Express</li>
        </details>
      </section>
      <section>
        <h4>Projects</h4>
        <details>
          <summary>
            <a href='https://journal-nine-rust.vercel.app/'>Journal (2023)</a> -
            Social journaling app to keep yourself on track and share your
            progress with others.
          </summary>
          <li>
            Developed a social journaling app that allows users to write, edit,
            and manage journal entries, offering profile editing and
            user-following features for enhanced user interaction.
          </li>
          <li>Utilized: NextJS + ReactJS, ClerkJS, Typescript, MySQL</li>
        </details>
        <details>
          <summary>
            <a href='https://vision-ai-rust.vercel.app/'>Vision AI (2023)</a> -
            AI powered application for on-demand creative solutions and
            generative content.
          </summary>
          <li>
            Created a software as a service (SaaS) allowing users to request and
            receive text, images, videos, music, and code in response to their
            prompts.
          </li>
          <li>
            Introduced a token-based payment system, allowing users to purchase
            and use tokens to pay for requests.
          </li>
          <li>
            Utilized: NextJS + ReactJS, ClerkJS, Typescript, MongoDB, Stripe,
            OpenAI, Replicate
          </li>
        </details>
        <details>
          <summary>
            <a href='discourse'>Discourse (2023)</a> - Voice chat & instant
            messaging social platform based on Discord.
          </summary>
          <li>
            Uses SimplePeer, a WebRTC wrapper, to provide audio chat services.
            Socket.io used as a signalling server.
          </li>
          <li>
            Users can join and create servers. In a server, users can join and
            create channels to chat with each other using text or voice.
          </li>
          <li>
            Frontend uses Socket.io-client and simple React without
            Reducer/Redux.
          </li>
          <li>Backend uses Express to serve Socket.io to the client.</li>
          <li>
            Socket server is hosted in a subdirectory which is just a reverse
            proxy on my virtual machine.
          </li>
        </details>

        <details>
          <summary>
            <a href='rf-online'>Road Fighter Online (2023)</a> - 2D online
            fighting game
          </summary>
          <li>
            Uses Socket.io to pass player data between clients and server.
          </li>
          <li>Built on top of an old single player project.</li>
        </details>

        <details>
          <summary>
            <a href='https://rural-outfitters.netlify.app/'>
              Rural Outfitters (2023)
            </a>
            - Ecommerce site selling country fashion
          </summary>
          <li>
            Focused on learning the fundamentals of React + Redux in a
            structured manner.
          </li>
          <li>Frontend uses React + Redux, Tailwind, and Sass.</li>
          <li>There is no dedicated backend.</li>
          <li>
            Utilizes Netlify serverless functions, Firebase authentication, and
            Firestore.
          </li>
          <li>Stripe JS used for payment processing.</li>
        </details>
        <details>
          <summary>
            <a href='gram'>gram (2020)</a> - Photo sharing social media app
            based off Instagram
          </summary>
          <li>
            Built with as few libraries and frameworks as possible to learn
            React the hard way.
          </li>
          <li>Users can upload, comment on, and like photos.</li>
          <li>Users can upload, comment on, and like photos.</li>
          <li>
            Users can follow other users to have their posts on their feed.
          </li>
          <li>Photos/posts are ranked based on recency and popularity.</li>
          <li>Client built minimally using React without CRA.</li>
          <li>
            Server also built minimally using Node.js with Express and Postgres.
          </li>
          <li>
            Uploaded images are compressed on server then stored in Cloudinary.
          </li>
        </details>
      </section>
      <section>
        <h4>Small Projects</h4>
        <details>
          <summary>
            <a href='lolchampdex'>LoL Champdex (2023)</a> - Visual appendix of
            my favorite video game
          </summary>
          <li>
            Having fun making something simple to learn the basics of React
          </li>
          <li>
            Appendix of all League of Legends champions and their corresponding
            skins and lore.
          </li>
          <li>Built rapidly using React</li>
        </details>
        <details>
          <summary>
            <a href='road-fighter'>Road Fighter (2022)</a> - 2D fighting game
          </summary>
          <li>Focused on improving JS skills by using barebones JS</li>
          <li>
            Played with 2 players over the same computer (local multiplayer).
          </li>
          <li>Built purely using HTML Canvas and JS.</li>
        </details>
      </section>
      <section hidden>
        <h4>Incomplete Projects</h4>
        <details>
          <summary>
            <a href=''>Hub (2023)</a> - Desktop platform for users to build
            communitites and interact with each other.
          </summary>
          <li>A Discord clone.</li>
          <li>Utilized: Electron, ReactJS, Typescript, Fastify</li>
        </details>
        <details>
          <summary>
            <a href='envoy'>Envoy (2023)</a> - Social networking site with
            communities, messaging, image sharing, and following. (Unfinished)
          </summary>
          <li>Users must create an account to access features.</li>
          <li>
            Users can join channels, look at other channel member&apos;s
            profiles, send channel messages, and discover new channels.
          </li>
          <li>
            Users can search for other users, view their profiles, follow them,
            and send direct messages to them.
          </li>
          <li>
            For personal profiles, users can upload pictures, update their
            profile information, and change their profile pictures.
          </li>
          <li>
            On the outside, this website seems less impressive than my previous
            one, but this project&apos;s focus is on following best practices,
            security, and structure over speed of development.
          </li>
          <li>
            Frontend uses redux saga for better handling of application side
            effects.
          </li>
          <li>
            Much more secure than previous projects because server authenticates
            and handles all the business logic.
          </li>
          <li>
            Server data can be accessed via both server API and websockets.
          </li>
        </details>
      </section>
    </>
  );
}

export default App;
