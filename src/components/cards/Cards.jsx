import Card from "../card/Card.jsx"
import styled from 'styled-components';

const Div = styled.div`
   // POR GRID
   // display: grid;
   // grid-template-column: 20% 20% 20% 20%;
   // justify-content: space-evenly;
   // padding: 5px;
   // with: screen;
   // margin: auto;
   // height: full;
   // overflow: hidden;

   //POR FLEX
   display: flex;
   justify-content: space-evenly;
`

// Opcion 1 directamente props
// export default function Cards(props) {

//Opción 2 destructuring
export default function Cards({ characters }) {

   // const { characters } = props;
   return (
      <Div>
         {characters.map((character) => {
            // para que muestre el objeto en consola se debe poner las llaves a los props.
            // console.log(character.origin.name);
            return <Card
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierre la card')}
            />
         })}
      </Div>
   );
}
