import StarshipCard from "../components/StarshipCard";

export default function Main({starships}) {
    return(
        <div>
            <h2><u>Starships of the Star Wars Universe</u></h2>
            <br/>
            <StarshipCard starships={starships} />
        </div>
    )
}