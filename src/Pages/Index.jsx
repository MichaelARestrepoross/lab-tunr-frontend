import Playlists from "../Components/Playlists";
import Songs from "../Components/Songs";

function Index() {
  return(
    <div className="Index">
      <h2>Index</h2>
      <Songs />
      <Playlists />
    </div>
  );
}

export default Index