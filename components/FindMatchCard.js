import Link from "next/link";
import articleStyles from "../styles/Article.module.css";
import Image from "next/image";

export default function FindMatchCard({ match }) {
  const time = match.date.slice(0, 16).replace("T", " ");

  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="lg:p-6 md:w-full flex justify-center mt-40">
            <div className="max-w-xl rounded-2xl overflow-hidden shadow-lg bg-gray-800 text-white">
              <img
                className="w-full"
                src={`/images/${match.pitch.name}.jpeg`}
                alt="Pitch Image"
              />
              <div className="px-6 py-4 lg:h-40">
                <h1 className="tracking-widest test-xs title-font font-medium mb-1">
                  {match.pitch.name}
                  <br></br>
                  {time}
                  <br></br>
                  {match._id.players}
                </h1>
              </div>
              {/* button styling */}
              <div>
                <Link href="/find-match/[_id]" as={`/find-match/${match._id}`}>
                  <button className="right-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    Match Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// export default function FindMatchCard({ match }) {
//   const time = match.date.slice(0, 16).replace("T", " ");

//   return (
//     <Link href="/find-match/[_id]" as={`/find-match/${match._id}`}>
//       <a className={articleStyles.card}>
//         <h2>Date:{time}</h2>
//         <h2>Pitch:{match.pitch.name}</h2>
//       </a>
//     </Link>
//   );
// }

// const time = match.date.slice(0, 16).replace("T", " ");
// return (
//   <div>
//     Date:{time}
//     <br />
//     Pitch:{match.pitch.name}
//   </div>
// );

// return (
//   <div className={articleStyles.grid}>
//     {articles.map((article) => (
//       <ArticleItem article={article} />
//       // <h3>{article.title}</h3>
//     ))}
//   </div>
// );
