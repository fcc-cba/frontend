// @ts-check
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FCC Córdoba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>¡Bienvenido a FreeCodeCamp Córdoba! 🎉</h1>
        <h2 id="about">🤔 ¿Quiénes somos?</h2>
        <p>
          Somos un grupo de entusiastas de la programación con distintos niveles
          de experiencia que se ayuda mutuamente en consultas relacionadas con
          la programación, desde preguntas puntuales de código hasta temas
          laborales
        </p>
        <h2 id="channels">💬 Canales:</h2>
        <ul>
          <li>
            <a href="https://discord.gg/wMZvD4F">Discord</a>
          </li>
          <li>
            <a href="https://chat.whatsapp.com/GkfuWmy2Tjd8Qh9Ta2AUaZ">
              WhatsApp
            </a>
          </li>
        </ul>
        <h2 id="coc">
          <a href="https://www.freecodecamp.org/news/code-of-conduct/">
            📜 Código de Conducta
          </a>
        </h2>
      </main>

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}
