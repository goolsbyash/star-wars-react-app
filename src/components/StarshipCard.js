import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export default function StarshipCard({ starships }) {
  return (
    <div id="shipDiv">
      {starships.length >= 1 ? (
        starships.map((starship) => (
          <Card>
            <Card.Link href={`/starship/${starship.name}`}>
              {starship.name}
            </Card.Link>
          </Card>
        ))
      ) : (
        <Spinner animation="border" variant="info"></Spinner>
      )}
    </div>
  );
}
